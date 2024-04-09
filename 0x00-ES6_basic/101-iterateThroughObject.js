export default function iterateThroughObject(reportWithIterator) {
let result = '';

    // Iterate through the report using the provided iterator
    let employee = reportWithIterator.next();
    while (!employee.done) {
        // Append each employee name to the result string
        result += employee.value + ' | ';
        employee = reportWithIterator.next();
    }

    // Remove the trailing ' | ' from the result string
    result = result.slice(0, -3);

    return result;
 }
