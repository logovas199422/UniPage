let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function requiredCoursesByPrice(requiredRange, courses) {
    let requiredCourses = []
    let minRequiredRange = requiredRange[0]
    let maxRequiredRange = requiredRange[1]

    for (let course of Object.values(courses)) {
        if (minRequiredRange === null && course.prices[0] != null && course.prices[0] <= maxRequiredRange) {
            requiredCourses.push(course.name)
        } else if (maxRequiredRange === null && course.prices[0] != null && course.prices[0] >= minRequiredRange) {
            requiredCourses.push(course.name)
        } else if (course.prices[0] != null && course.prices[0] >= minRequiredRange && course.prices[1] != null && course.prices[1] <= maxRequiredRange) {
            requiredCourses.push(course.name)
        }
    }

    return requiredCourses
}

console.log(requiredCoursesByPrice(requiredRange3, courses))