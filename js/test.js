var obj = JSON.parse($request.body); 
obj['jailbroken'] = false;
$done({body: JSON.stringify(obj)})
