const csvToJson = require('convert-csv-to-json')

const input = './data/crimeDB.csv'
const output = './data/crimeDB.json'

csvToJson.fieldDelimiter(',').formatValueByType().generateJsonFileFromCsv(input, output)