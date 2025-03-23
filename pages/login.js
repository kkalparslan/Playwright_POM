exports.LoginPage = class LoginPage { //export yapmadan diğer file lardan buraya bağlanamıyor
    /**  constructor(page) {
         this.page = page
         this.username_textbox = page.getByLabel('Username')
         this.password_textbox = page.getByLabel('Password')
         this.login_button = page.getByRole('button', { name: 'Login' })
     }*/
    /**
     * bu şekilde tek tek functionları verebilir yada genel olarak bir login vb. fınction oluşturup
     * içine de bu functionları ekleyebilirm. şimdi login function oluşturup içine bunları alacağım.
     *  async enterUsername(){
        await this.username_textbox.fill()
        }
        async enterPassword(){
        await this.password_textbox.fill()
        }
        async clickOnLogin(){
        await this.login_button.clickOnLogin()
        }
     
    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username, password) {
        //login methoduna variable atadık ve böylece hard coding values yerine (isim ve password)
        // kodun reusable olmasını sağladık.
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }*/
    constructor(page) {
        this.page = page
        this.employee_button = page.getByRole('button', { name: 'Employee' })
        this.username = page.getByLabel('Email or phone')
        this.next_button = page.getByRole('button', { name: 'Next' })
        this.password = page.getByLabel('Enter your password')        
        this.next_first_button = page.getByRole('button', { name: 'Next' }).first()
        this.employee_button_2 = page.getByRole('button', { name: 'Employee' })
        this.label_button = page.getByLabel('').locator('div').nth(2)
        this.function_text = page.getByText('super admin')
        this.ok_button = page.getByText('OK')
        this.dashboard_button = page.locator('button').filter({ hasText: 'home' })
        this.logout_button = page.getByText('Logout')      
    }
    async gotoLoginPage() {
        await this.page.goto('https://dev.v2.care4pro.nl/')
        await this.page.goto('https://kc-int.v2.care4pro.nl/auth/realms/c4p-dev/protocol/openid-connect/auth?client_id=c4p-employee-portal&redirect_uri=https%3A%2F%2Fdev.v2.care4pro.nl%2F&state=f4198c87-aef3-4e26-941a-dbb7da90a455&response_mode=fragment&response_type=code&scope=openid&nonce=dca2cd9c-f1bd-480c-813c-5922c71e6918')
    }
    async login(username, password){
        await this.employee_button.click()
        await this.username.fill(username)
        await this.next_button.click()
        await this.password.fill(password)
        await this.next_first_button.click()
        await new Promise(res => setTimeout(res, 1000))
        await this.page.goto('https://dev.v2.care4pro.nl/')
        await this.employee_button_2.click()
        await this.label_button.click()
        await this.function_text.click()
        await this.ok_button.click()        
    }
    async logout(){
        await new Promise(res => setTimeout(res, 1000))
        await this.dashboard_button.click()
        await this.logout_button.click()
    }
}