import './style/footer.css'
import picture from './assets/logo.png'
import { Whatsapp } from './assets/whatsapp'
import { Facebook } from './assets/facebook'
import { Instagram } from './assets/instagram'

export function Footer (){
    return  <div id="footer">
                <section>
                    <div><img src={picture} alt="logo" /></div>
                    <div><Facebook/>   <Instagram/>   <Whatsapp/></div>
                </section>
                <section>
                    <div>Policies</div>
                    <div>Terms and Conditions</div>
                </section>
                <section>
                    <div>
                        PAGES<br/><br/>
                        About us<br/>
                        How it works<br/>
                        Privacy policy<br/>
                        Terms of service<br/>
                        Press & News<br/>
                        Contact us<br/>
                        Trust & safety<br/>
                        Thank You<br/>
                        FAQ<br/>
                    </div>
                    <div>
                        CATEGORIES<br/><br/>
                        Electricians<br/>
                        Painting<br/>
                        Car Repair<br/>
                        Cleaning<br/>
                        AC Repair<br/>
                        Website Development<br/>
                        Carpenter<br/>
                        Car Rental Service<br/>
                        All Services<br/>
                    </div>
                    <div>
                        LOCATIONS<br/><br/>
                        Broad Street<br/>
                        Duport Road<br/>
                        Fiamah<br/>
                        New Matadi Estate<br/>
                        New York<br/>
                        Old Matadi Estate<br/>
                        Old Road<br/>
                        Paynesville<br/>
                        Sinkor<br/>
                    </div>
                </section>
                <section>
                    <div>
                        <p>CallEva Solutions © Copyright @ 2023 - All Rights Reserved.</p>
                        <p>Developed By <a href="http://www.victorthesaiyan.xyz" target='blank'> InfoTech Nexus </a></p>
                    </div>
                </section>
            </div>
}