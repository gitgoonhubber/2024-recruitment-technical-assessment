import { stringify } from "querystring";

type FileData = {
    id: number,
    name: string,
    categories: string[],
    parent: number
    size: number
};

/**
 * Task 1
 */
function leafFiles(files: FileData[]): string[] {
    const parentFiles: Set<number> = new Set()
    const leafFiles: string[] = []
    
    files.forEach(file => {
        if (file.parent !== -1) {
            parentFiles.add(file.parent)
        }
    })

    files.forEach(file => {
        if (!parentFiles.has(file.id)) {
            leafFiles.push(file.name)
        }
    })

    return leafFiles;
}

/**
 * Task 2
 */
function kLargestCategories(files: FileData[], k: number): string[] {
    const categoryMap: Map<string, {count: number, size: number}>=new Map()
    
    // Create map where key is category and value is object containing count and filesize of a category
    for (const file of files) {
        for (const category of file.categories) {
            if (!categoryMap.has(category)) {
                categoryMap.set(category, {count: 0, size: 0})
            }
            
            categoryMap.get(category)!.count++
            categoryMap.get(category)!.size += file.size
        }
    }

    // Convert map into array of objects
    let categoryArray = Array.from(categoryMap, ([category, {count, size}]) => ({category, count, size})) 

    // Sort in descending order of count. If count is equal, prioritise alphabetical order
    categoryArray.sort((a, b) => {
        if (a.count === b.count) {
            return a.category.localeCompare(b.category)
        } else {
            return b.count - a.count
        }
    })

    return categoryArray.slice(0, k).map(obj => obj.category)
}

/**
 * Task 3
 */
function largestFileSize(files: FileData[]): number {
    const fileSizes: Map<number, {size: number}> =new Map() 
    const fileMap: Map<number, FileData>=new Map()
    
    for (const file of files) {
        fileMap.set(file.id, file)
        fileSizes.set(file.id, {size: 0})
    } 

    for (const file of files) {
        fileSizes.get(file.id)!.size += file.size

        let parent = file.parent
        while (parent !== -1) {
            fileSizes.get(parent)!.size += file.size
            parent = fileMap.get(parent)!.parent
        }
    }

    const fileSizesArray = Array.from(fileSizes, ([id, {size}]) => ({id, size}))

    let maxFileSize = fileSizesArray[0].size
    fileSizesArray.forEach(file => {
        maxFileSize = Math.max(file.size, maxFileSize)
    })

    return maxFileSize;
}


function arraysEqual<T>(a: T[], b: T[]): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles: FileData[] = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];


console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

// Additional tests
// console.log(kLargestCategories(testFiles, 3))
// console.log(kLargestCategories(testFiles, 30))

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
