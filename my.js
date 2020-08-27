


    describe('Testing DIV & SPAN',()=>{

        beforeEach(function () {
            document.body.innerHTML = __html__['my.html'];
        });


		it('Checking there is <div> with id="header"', function() {

            expect(document.getElementById('head')).toBeDefined();
         
        });


		it('Check there is header withe message "My Application" in <h1>', function() {
			var str = document.getElementById('head').innerHTML;
			st=str.trim();
			str=str.toLowerCase();
            expect(str).toContain("my application</h1>");
         
        });


		it('Check there is <div> with id="body".', function() {

            expect(document.getElementById('body')).toBeDefined();
         
        });


		it('Check there is <div> with id="span1" and back ground color=Green.', function() {
			
			var x = document.getElementById("span1");
			var y = x.getAttribute("style");
			//console.log(y);
			y=y.trim();
			y=y.toLowerCase();
			expect(y).toContain("#00ff00");
			
        });


		it('Check there is <div> with id="span2" and back ground color=Blue.', function() {
			
			var x = document.getElementById("span2");
			var y = x.getAttribute("style");
			//console.log(y);
			y=y.trim();
			y=y.toLowerCase();
			expect(y).toContain("#0000ff");
			
        });
      
    });
