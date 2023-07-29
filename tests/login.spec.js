import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login'

test('test login', async ({ page }) => {

  const Login = new LoginPage(page) //page i buraya koymazsam hata verir. şimdi Login const u bu classdaki
  //tüm methodları çağırabilecek

  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword')
  
  //await page.goto('https://the-internet.herokuapp.com/login');
  //await page.getByLabel('Username').click();
  //await page.getByLabel('Username').fill('tomsmith');
  //await page.getByLabel('Password').click();
  //await page.getByLabel('Password').fill('SuperSecretPassword');
  //await page.getByRole('button', { name: ' Login' }).click();
});