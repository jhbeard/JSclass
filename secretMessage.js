let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
console.log(secretMessage.pop());
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
secretMessage['easily'] = 'right';
console.log(secretMessage)
secretMessage.unshift('Programming')
secretMessage.splice(7, 12, 'know')
console.log(secretMessage.join(''));
