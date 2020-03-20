
describe('alerthandling', function(){
	
	it('alerttestcase', function(){
		browser.waitForAngularEnabled(false);
		
		browser.get('https://rahulshettyacademy.com/AutomationPractice/')
		element(by.id("confirmbtn")).click().then(function(){
			browser.sleep(3000);
		})
		
		// to click on OK in the alert, use accept()
	/*	browser.switchTo().alert().accept().then(function(){
			
			browser.sleep(3000);
		})*/
		
		// to click on cancel in the alert, use dismiss()
			browser.switchTo().alert().dismiss().then(function(){
			
			browser.sleep(3000);
		})
		
		
		
	})
	
	
	
})