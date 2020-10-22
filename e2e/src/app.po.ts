import { browser, by, element} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  navigateToSignup(){
    return browser.get(browser.baseUrl + '/signUp');
  }

  navigateToMenu(){
    return browser.get(browser.baseUrl + '/menu');
  }

  getTitleText(){
    return element(by.css('#title')).getText();
  }

  menuButton() {
    element(by.css(".btn-primary")).click();
  }

  fillLoginForm(email : string , password : string) {
    element(by.css("input[type='email']")).sendKeys(email);
    element(by.css("input[type='password']")).sendKeys(password);
    element(by.css('.btn-primary')).click();
  }

  fillSignupForm(username : string , password : string , confirmPassword : string ,
     email : string , phone : string , address : string) {
      element(by.css("input[type='email']")).sendKeys(email);
      element(by.css("input[type='password']")).sendKeys(password);
      element(by.css("input[id='username']")).sendKeys(username);
      element(by.css("input[id='cpw']")).sendKeys(confirmPassword);
      element(by.css("input[type='phoneNumber']")).sendKeys(phone);
      element(by.css("input[id='address']")).sendKeys(address);
      element(by.css("input[type='checkbox']")).click();
      element(by.css(".btn-primary")).click();
     }

  selectMenu(num : number) {
    element(by.cssContainingText('option', '1')).click();
  }

}
