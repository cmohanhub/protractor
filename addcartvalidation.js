describe('testingrahulapp', function(){
	function selectitems(model){
	element.all(by.tagName("app-card")).each(function(item){
		item.element(by.css("h4[class='card-title']")).getText().then(function(text){
		if (text==model) 
			{
			item.element(by.css("button[class*='btn-info']")).click()
			
			}
		})
	})
	}
	it('testcase1', function(){		
		browser.get('https://rahulshettyacademy.com/angularpractice/');
		browser.driver.manage().window().maximize();	
		element(by.linkText("Shop")).click()
		//using tagname, we found the number of products in display
		selectitems("iphone X")
		selectitems("Nokia Edge")
		selectitems("Samsung Note 8")
			/browser.sleep(4000);
		element(by.partialLinkText("Checkout")).getText().then(function(adddcartno){			
			var ab=adddcartno.split("(");
		//	console.log(ab[0]);
		//	console.log(ab[1]);
			//console.log((ab[1].trim()).charAt(0));
			expect(ab[1].trim().charAt(0)).toBe("3");
		
	        			
		})
		
		element(by.partialLinkText("Checkout")).click()
	/*	element.all(by.css("td[class='col-sm-1 col-md-1 text-center']")).each(function(item){
	//item.element(by.tagName("strong")).getText().then(function(price){
		item.element(by.css("strong:nth-child(2)")).getText().then(function(price){
			console.log(price); */
		
		
		/*element.all(by.css("td[class='col-sm-1 col-md-1 text-center']")).each(function(items){
			items.element(by.css("strong")).getText().then(function(sums){
			console.log(sums);
		})
		})*/
		element(by.css("tbody")).all(by.tagName('tr')).each(function(items){
			items.element(by.css("td:nth-child(4)")).getText().then(function(price){
			
				console.log(price);
			})
			})
			element(by.css("td[class='text-right']")).element(by.tagName("strong")).getText().then(function(amount){
				console.log("Total amount is ", amount)
			})
		
	})
		
})