function extractFile (text) {

    let arr = text.split('\\');
    let last = arr.pop();

    let index = last.lastIndexOf('.');

    let name = last.substring(0, index);
    let extension = last.substring(index + 1, last.length)

    console.log('File name:', name);
    console.log('File extension:', extension);




}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log('------------------');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');