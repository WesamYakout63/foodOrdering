import { AppPage } from './app.po';
import { browser, element, by, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display log in page , when the user open the app', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Log in');
  });

  it('tries to log in with correct user data', () => {
    page.navigateTo();
    page.fillLoginForm("test@test.com", "123ASDasd");
    expect(page.getTitleText()).toEqual('Food Menu');
  });

  it('tries to log in with wrong user data', () => {
    page.navigateTo();
    page.fillLoginForm("wesam", "123ASDasd");
    expect(page.getTitleText()).toEqual('Log in');
  });

  it('tries to sign up with wrong data', () => {
    page.navigateToSignup();
    // browser.sleep(20000);
    page.fillSignupForm(" ", " ", " ", " ", " ", " ");
    expect(page.getTitleText()).toEqual('Sign up');
  });

  it('tries to sign up with correct data', () => {
    page.navigateToSignup();
    page.fillSignupForm("ABC", "753QWEqwe", "753QWEqwe", "wesam@wesam.com", "01285477974", "Alex");
    expect(page.getTitleText()).toEqual('Food Menu');
  });

  it('tries to sign up with existing email address', () => {
    page.navigateToSignup();
    page.fillSignupForm("ABC", "753QWEqwe", "753QWEqwe", "test@test.com", "01285477974", "Alex");
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.accept).toBeDefined();
    alertDialog.accept();
  });

  it('checkouts on empty choices', () => {
    page.navigateTo();
    page.fillLoginForm("test@test.com", "123ASDasd");
    page.menuButton();
    var alertDialog = browser.switchTo().alert();
    expect(alertDialog.accept).toBeDefined();
    alertDialog.accept();
  });

  it('checkouts on non empty choices' , () => {
    page.navigateTo();
    page.fillLoginForm("test@test.com", "123ASDasd");
    page.selectMenu(1);
    page.menuButton();
    expect(page.getTitleText()).toEqual('Checkout');
  });

    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });

});
