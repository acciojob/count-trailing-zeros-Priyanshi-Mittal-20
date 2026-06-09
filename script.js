function trailingZeros(n) {
  //your JS code here. If required.
	if(n==0)
	{
		return 0
	}
	let fact=1
	for(let i=1;i<=n;i++)
		{
			fact*=i
		}
	let arr=String(fact).split("")
	let count=0
	for(let j=arr.length-1;j>=0;j--)
		{
			if(arr[j]==0)
			{
				count++
			}
		}
	return count
}

// const input = prompt("Enter a number");
// alert(trailingZeros(input));
