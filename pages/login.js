exports.LoginPage = class LoginPage { //export yapmadan diğer file lardan buraya bağlanamıyor
    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }
    /**
     * bu şekilde tek tek functionları verebilir yada genel olarak bir login vb. fınction oluşturp
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
     */
    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username, password) {
        //login methoduna variable atadık ve böylece hard coding values yerine (isim ve password)
        // kodun reusable olmasını sağladık.
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }
}