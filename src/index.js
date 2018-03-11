class SmartCalculator {
	constructor(initialValue) {
		this.init = initialValue;
		this.arr = [{val: initialValue}];
		// your implementation
	}
	get result(){
		var temp = [];
		var prior = [1,2,3];
		for(var i=0; i<this.arr.length; i++)
		{
			temp.push(this.arr[i]);
		}
		for(var i=temp.length-1; i>0; i--)
		{
			if(temp[i].priority == 1)
			{
				var a = temp[i].op(temp[i-1].val,temp[i].val);
				temp[i-1].val = a;
				temp.splice(i,1);
			}
		}
		for(var i=1; i<prior.length; i++)
		{
			for(var j=0; j<temp.length; j++)
			{
				if(temp[j].priority == prior[i] && j>0)
				{
					var a = temp[j].op(temp[j-1].val,temp[j].val);
					temp[j-1].val = a;
					temp.splice(j,1);
					i--;
				}
			}
		}
		this.init =temp[0].val;
		return this.init;
	}
	add(number) {
		this.arr.push({
			priority: 3,
			val: number,
			op: (a,b) => a+b
	});
		return this;
		// your implementation
	}

	subtract(number) {
		this.arr.push({
			priority: 3,
			val: number,
			op: (a,b) => a-b
	});
		return this;
		// your implementation
	}

	multiply(number) {
		this.arr.push({
			priority: 2,
			val: number,
			op: (a,b)=> a*b
	});
		return this;
		// your implementation
	}

	devide(number) {
		this.arr.push({
			priority: 2,
			val: number,
			op: (a,b) => a/b
	});
		return this;
		// your implementation
	}

	pow(number) {
		this.arr.push({
			priority: 1,
			val: number,
			op: (a,b) => Math.pow(a,b)
	});
		return this;
		// your implementation
	}
	valueOf()
	{
		return this.result;
	}
}
module.exports = SmartCalculator;
