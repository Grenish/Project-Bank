import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] realtive z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' /> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
      Managing your billing and invoices just got a lot easier! With Billon, you can remotely control all your invoices, customer payments, and recurring bills. Customize notification methods like a text message or push notification to be notified of any delays or interruptions. Save yourself time and gain more customer satisfaction by understanding where each invoice stands.
      </p>

      <div className="flex flex-row fex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
)


export default Billing
