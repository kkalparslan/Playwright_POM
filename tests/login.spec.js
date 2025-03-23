import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login'

test ('test login', async ({ page }) => {

  const Login = new LoginPage(page) //page i buraya koymazsam hata verir. şimdi Login const u bu classdaki
  //tüm methodları çağırabilecek

  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword') 
  
});
test.only('login_c4p', async ({ page }) => {
  const Login = new LoginPage(page) //page i buraya koymazsam hata verir. şimdi Login const bu classdaki
  //tüm methodları çağırabilecek

  await Login.gotoLoginPage()
  await Login.login('alparslanozturk@dekatechs.com','Ec974125')
  await Login.logout()
});