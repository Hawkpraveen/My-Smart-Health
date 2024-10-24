import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = ({ onFinish }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      id: 1,
      content: (
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt="Splash Pic"
            className="splash-image"
          />
          <h1 className="text-lg mt-3 text-center">Health Desk</h1>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="mb-20 ">
          <img
            src="https://media.istockphoto.com/id/1273745492/vector/woman-patient-character-taking-consulting-specialist-doctor-consultation-vector-flat-graphic.jpg?s=612x612&w=0&k=20&c=qSDZHcpC8p0hV62Ve8i0J9nKiuIVyTU5COoTDA3PGkU="
            alt="Splash Pic"
            className="object-cover w-fit h-52 mx-auto rounded-xl"
          />
          <h1 className="text-2xl font-semibold mt-2 mb-2 text-center">
            Schedule Doctor Appointments
          </h1>
          <p className="text-ellipsis text-center w-fit">
            Book appointments with your preferred doctors hassle-free. Choose
            from a list of experienced healthcare professionals.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="mb-20 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZrhJFxE88J-A73SnZWE__MEAe3KyXfQc74A&s"
            alt="Splash Pic"
            className="object-cover w-fit h-52 mx-auto rounded-xl"
          />
          <h1 className="text-2xl font-semibold mt-2 mb-2 text-center">
            Never Miss a Dose
          </h1>
          <p className="text-ellipsis text-center w-fit">
            Set up personalized medicine reminders to ensure you never miss a
            dose. Stay on top of your treatment plan with timely notifications.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="mb-20 ">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxgYGBcXFhcXFxgYFxcXFhcZGBYYHCghGhslHRkWITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4lICYtKy0vLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANMA7wMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAQL/xABREAABAwIDAwUIDA0CBgMBAAABAAIDBBEFEiEGMUEHEyJRYRRTcYGRobHRFRYXMjVScnOSk7PBIzM0QlRidIKissLS8NPhJCVDZKPxY4O0CP/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAA1EQACAgEBBgMHBAIDAAMAAAAAAQIDEQQFEhMhMVEyQXEUFVJhgZGhIjOx0eHwI0LBNENT/9oADAMBAAIRAxEAPwDeKAIAgCA03tfyvSCV0VC1mRpIMzwXZyN5jbcANvuJvfqCtV6dYzIilZjoRn3VMV78z6mP1KTgQNOLIe6pivf2fUx+pOBAcWQ91TFe/M+pj9ScCA4sh7qmK9+Z9TH6k4EBxZD3VMV78z6mP1JwIDiyHuqYr35n1MfqTgQHFkPdUxXvzPqY/UnAgOLIe6pivfmfUx+pOBAcWQ91TFe/M+pj9ScCA4sj6j5UcWcQ1szSSbAczH6lmOmjJ4SHFZIPbZiD48stRqd5ja1niDmgFdzT7Kpr5zWX+CvO+UuhjHyuJuXEnrJJPlK6KhFLCXIgyzM4NtVU05FnmRnFjyXC3YTq3xadhVLUbOouXTD7olhdKJtPBcWjqYhLGdDoQd7XcWnt9YXltRROibhMvwmprKL9Qm4QBAEAQBAEAQBAEAQBAEAQGH2xmcygrHtNnNppyD1EROIK2gsySMPocz7P4YamphpwcvOPay/UD7424kNBNuxdGUt1NlWKy8HQVFyaYXGwN7mDyN7nue5x7TrYeIAKg7pvzLKhHsVncnmFkW7jj8RePOHJxZ9xuR7GmeVDZWOgqmthzczKzOwOJdlLTZ7Q46kDonXXpK3TY5rmQWR3XyIepTQIAgCA8cbaoDfuyHJnQtpYnVEHOTvY10he53Rc4BxYGggANvbdfRUZ3Sb5MsxgkjGbd4FRUpibT07I3uzOLhe4aOiBqeNz9FdjY0HOUrJPpyK2pwkkiOVFJIy2eN7M2ozNc247LjVd2FsJ5UWnjsVXFrqeCkkyc5zb8l7Z8pyX3e+tbescWG/uZWe3mN14yKalkkvzcb32FzlaXWHWbDRZnbCHjaXqFFvoSXk5xEx1XNX6MoIt+s0FzT5A4eNczbFKnTxPOP8ADJ9PLEsdzai8uXwgCAIAgCAIAgCAIAgCAIAgMHtz8G1v7LP9k9b1+NGJdDn/AJOfhSj+d/ocrtvgZWh4kdOLnloIDHY5gVNVx83UxNkaDcXuC07rtcCC024graMnF5RhrJGPcnwnvD/r5v71Jx5mu5Ee5PhPeX/Xzf3p7RMbkR7k+E95f9fN/entExuRHuT4T3l/18396e0TG5Eu8M5NsMgkbIynu5pBbnkkkAI1ByvcRcHjZYldNrGTKgkS1RGxrvlFcY6umlLcwABsdx5uTMR5wu/slcSiytPDf/qwU9TymmW22O1cNVC2ONjr5g4l4Ay2BFhYm51UuztnW0Wuc2umOXma3XRnHCK0G2UIoeYMbucEXNWsMh6OXMTfdxIte/lUctl2vVcTPLOfmZV8VXu4LbYraiGljkjla7V2cOaASeiG5Tcjq08J3KbaWgs1E1ODXTHM1oujBYZabOy8/ibJGtyh0r5LDgLOdr6PGpdXHg6FwbzhJfwa1vetybbXlDohAEAQBAEAQBAEAQBAEAQBAYPbn4Nrf2Wf7J63r8aMS6HP/Jz8KUfzv9Dldt8DK0PEjpxc8tFpNicLSWukYCN4JFwpY02SWVFmjsgnhs+PZin76z6QWfZ7fhZjjQ7n3DiULyGtkYSdwBFysSpsistMyrIt4TLtRG4QBAEAQEY5Q6FklI57jZ0RDmnruQ0t8dx4wF0tlWyhqFFefJkGoinDPY1QvWHPCAIDY/JzgLo2mpkFnPFowd4YbEuPhsLdg7V5ra+sVklVDouvr/gu6evH6mTdcYtBAEAQBAEAQBAEAQBAEAQBAYPbn4Nrf2Wf7J63r8aMS6HP/Jz8KUfzv9Dlet8DK0PEjpxc4tEAlY0PmkcM1pC0N1sXOc4621sA0+HRd1NuMIR5ZX4OY0syk+58wPbK7IWMaXaNcwZbO4AgaEHd16rM4yqW+m33TMRam8NFHDT+Gi+cZ/MFLf8AtS9Ga1+JepsdecOsEAQBACgNXbW4jWVLubNNNHG06M5txLj1uIFj2AaeFel2fVpqFv76cn8+hQulOfLDwRfHqGelp+6JYi1peGNDuiS5wcfe7wLNO8KxbtKmL3YPL/H3NFTLGWe7CUxxGR8YIiLGB5J6YN3BtgNFXs2vuLwfk3jRveZs7BthqeEh7yZnjdmADAesM4+Mlc3U7VutW6v0r5dfuWIaeMeb5kqXMJwgCAIAgCAIAgCAIAgCAIAgCAwe3PwbW/ss/wBk9b1+NGJdDn/k5+FKP53+hyu2+BlaHiR04ueWjX0szRJMx4Ja57r23ghzrOF9+8i3G67yg3CEo9Uv/DluSUmn0yVaDmGvH4R1yCGuLAGsJBAc7pG9lrdxpR8Kx58+ptDcT6lGnpnR1EbHCxEjPARmFiDxCklZGymUo9n/AAaqLjYk+5sJefOoEAQBAEAQGueXX4Pj/aGfySqfT+Mjs8JFuQT8qqPmR/OFJqeiNavM3eqhMEAQBAEAQBAEAQBAEAQBAEAQBAYPbn4Nrf2Wf7J63r8aMS6HP/Jz8KUfzv8AQ5XbfAytDxI6cXPLRE63ZiV0jnNcyznEi5IOpvbQFdWrXwjBJp8ilPTScm0yj7VZ/jR+V39q39419ma+yy7l7TYDPmi5x7C2Mgi1y6wINrkDTTxKCerq3ZbkXmRJGieVvPoSVc4thAEBGuUXaB9Dh81TGAZG5Wszbg572suRxte9uNlvXHekkYbNAUW3ON1EmWKqme+xOVgjGg3nKGgK7OqmuOZcjEFObxFEiwr2zVUrGd0SRXPvnujY0W11a0Xd4LG6ru7S9IvLJnp7ox3pLCJpy3zXoIm3zETsu7cCRHJfRZog08srWPkR7kE/Kqj5kfzhbanojWrzN3qoThAEAQBAEAQBAEAQBAEAQBAEAQGD25+Da39ln+yet6/EjEuhz/yc/ClH87/Q5XbfAytDxI6cXPLQQBAEAQBAEBGOU3De6MLq4wLkRGRoG8uiIlAHhy28a3reJJmGa02M2WpYpG1dNMZGOiyi5B6RtmNxax0tltpcqnrNXbOLqsWOZ2dJpa4tWQeeRMsJc/nze9rjKdLEEG9gNRbcbnXhZQabd4sMEmq3uFPJh+WT8hZ8+z+SRegj1POS6GI5BPyqo+ZH84UWp6IzV5m71UJggCAIAgCAIAgCAIAgCAIAgKVVUNjaXuNgP88q1nNQjvS6G8ISnJRj1IfiGOSyHQljeAabHxu3ri3ayyb5ckd2jQV1rMllmNlcXNc1xJa4FrmkkhzXCxBHEEcFBG2cXlSf3LTpraw4r7EfwrZKOLEKWog6LWygvYToAQRdhPaRofFusuxpdpua4dvXyf8AZxtXsxQ/5Kunmv6Nzq2c4IAgIniu078xbDYAG2Yi5JHUN1lxNTtOSk41eXmdvS7Mi4qVvn5GP9sdT8cfRb6lV95ajuvsWvdmn7fke2Op+OPot9Se8tR3X2HuzT9vyPbHU/HH0W+pPeWo7r7D3Zp+35Pio2kqBHI9zhzbGkvOQFoaBrm06lJVrNZa8Q5/Qit0ekrWZ8vqY7AcMip4GRRXyAEgk3JzHMST41busnZPen1N6a41wSh0L6TFX2aAdW+9JA04b+Kqz104NKPVfI3Wjrnns+vMxuOMFXGIp+kwODgBdvSAIGrbHcSsLa+qX/ZfZGr2Vpn5fllDZ2hZQvc+mGRz25XEkvuL33PJtqsT2tqpdWvsgtlaZdF+WZ/2x1Pxx9FvqWnvLUd19jPuzT9vyPbHU/HH0W+pPeWo7r7D3Zp+35L7DNqH5gJrFp/OAsR2ngQrOn2nLexb07lbU7Lju71XXsS5dw4YQBAEAQBAEAQBAEAQEZ2uqTdkfC2Y+cD71y9oT6Q+p19l1rnP6EdXMOuLoDxAT3B6gyQscd9rHwg2PoXodPPfrUjzGpr4dsoovFMQFOoPRd4D6FpZ4X6G0PEjWMbb2HXYLx6WXg9jJ7sckubsjHbWR9+wNt6F3FsmGPEzhPa9nlFHvtRj74/+H1LPumv4n+DHve34V+T6j2TiBBL3uHVoL+MC6zHZVSeW2zEtq2tYSSKO1tO3JSQBoDJKyEOaBoRHmnsRxBMTV1K4RgsRWDmTlKTzJ5ZBMRw/EKeWSKnlhfEHuyicPzxtJuGgs980DdfsCv8Au2m9Kb8+xtDaNtS3DI7MYY4E0sj8z5WPqIZLBo5wSf8AFRWA0ZmfG8Dhzrupc3aez4T5JYaSwybRa6dct59G+aPZIy0lrhYg2IPAryMouLcZdT1UJKUVKPQ+VqbBAfcLLmylphvywzScsIq1EYDVNfXGFfI0hJuRsOiP4NnyG+gL01fgXojydnjfqyutzQIAgCAIAgCAIAgCAiW1rDzrTwLPQTf0hcfaCxYn8jt7Mlmtr5lLGcQikYxsbMpHYBYWtlFt/DyLXU312RSijfSaa2ucnN/73GMYhFJGxrGZSOwCwtawtv8A9k1F9dkEooaXTW12OU3yPcWxGKSJjWMykW4AWFrEA8f9k1F9c61GK5jS6a2uxym+X8me2bYRTsvxzHxFxt5l0NGsUrJzNdJO+WP95GTVoqFOp9475J9C0s8L9DaHiRrFg3cO1ePSyexbwsknZhzQABiFh2P0+0XZWnjj9/8AP+TivUSb50fj/BfYfg5zNeal8jd4Accpt2hxuOxWaNG01PiOS9eX8la/VpxcFWov05/wZxdE55FdpYqiWYc26Ngo2sqW52F3OyObUR5HEOGRgaHai5u8H82ztlhIFlj4/C5rWzsY+3VcW+5djRSzVjsU7liRSwzZ4VM0E5mljNLIXhjDZr84aCHdnQsesEhVtd+mXqiWjoZHa2g151o10zeDcD4j/mi8ztTS5hxo+XJ/2d7ZepxLhS8+hGVwDvGXw3B8wvJdocDl678CfOR4F2tFsriwc7OXZf8Apx9ZtPhz3K+ff+i3dSmInPvHkt1jwqBaZ6ZvfLkL1fFOBZzSZlQutc/QswjumyKH8Wz5DfQF62rwL0R5Czxv1ZXW5oEAQBAEAQBAEAQBAY3HcO56PT37dW9vWPH6lW1VHFhhdUWtJqODPL6PqQp7SCQQQRvB3hcJpp4Z6OMlJZR4sGT1lrjNe1xe2+3GyzHGefQxPO693qbDpy3K3JbLYWtutwXpIY3Vu9Dyk97ee91Ki2NSnU+8d8k+haWeF+htDxI1izhfcvHrHmexecciV4dSUMxLWRvuBckl4A8Jzb126KdHc8Qi/wAnCvu1lKzOS/H9EkjYGgNAsALADgAuvGKisI5TbbyylPNbQb/Qt4Ryasta+rDXPGWQ3jGrYpHje/i1pBPYLkW7RfCMmG2raCYni+rSNQQdLEXB1B13FdLZ75SRWvXNM+tj39OQdbQfISPvWdoLlFih82ZvEGA6EXBFj4Fz4xUouL6MsqTjJNEdw/Aw15c/UA9EdfUXepcrSbJULHKzmk+S/wDWdXU7Tc61GHJtc/6M09txb/PCu2uRxzF40xjoznOVzdx6zwAHEHzeIrm7UqqlTmbxjp/R0Nm22RtxBZz1/si68k+h6g2XQ/i2fIb6AvZVeBeiPG2eN+rK63NAgCAIC0qMTgYbPmjaepz2tPkJWcMFeGZrxmY4OHW0gjyhYBUQBAEAQBAWlZh0Uvv2Anr3HyhQ2UV2eJE1Wosq8DI/tThEcNFVSx5g+Onmew3vZzY3OabcbEDetKtBTvrK/JNPaF7XX8GsNjtrJJ5YqWVoL5HZWyA2BNiem23ZvHkTVbJXOVTx8mSaba7S3bVn5o27guGTxO1e0M4tBLr+C4FlDptPbW+b5djOr1NNq5R59zOq+c4pVRsx1/in0LWfhfozaHiRrJh3eheOT5nsWsrBsPCHMdE17I2szC9m2G64FyAvV6VxlWpxjjJ5PUqUbHGUs4K0s7gD+DJIBIAIsSBe194v2hTz/TFtc/kQwWZJPl8zHUFYJgJAzLc7t9yNLk2HVbxLGjtVtW/jGckupqdVm5nODMrYhMDtez8Gw9TreUH1K/s9/ra+RBf0RjtlHWnt1sPpB+5WNev+P6kdHiJLW8PGubV5lllqpTBbV1ayJt3HXgBvP+daq6rV16eOZdfJdyxp9NO+WI/ciddWOldmd4hwA7PWvJ6nVT1E96X27HqNPpoUR3Y/ctyqz6Fg2XQ/i2fIb6AvZVeBeiPG2eN+rK63NAgCAivKZFM+gkjgl5p7y1odmyk63yBw3FxAb+8fAisjW1KSyjeut2PdRyrNEWuLXgtcCQ4OFnA8bg8V2YuLWY9CtJSTwzPbEbVTYfUsljcRHmAlj1yvjv0rt+MBcg8D4wY7qlOPzEZczrRjgQCDcEXB6wVyiY+kAQBAEAQGD25+Da39ln+yet6/GjEuhz9yd/CdH86P5XK9b4GVoeJHTq5xaKc0waLlZjFyeEYbwYmsnLgb7rGwU04KNcvRmIPM16og7TaxXhU8M9q1lYNhYNVvkZeSMscDusQCLaEXXqdLbOyGZxwzyupqhXPEJZRfq0ViymHT8Y+5TR8Jq+peqE2MLtYPwI+WPQ5XNB+79CG/wmE2bdaoZ25h/CT9yva39l/Qhp8ZJMYnc3LljdJe98ouRutouBbqJU4xByz28jpU0xtzmSj6mErcaey14HNv8e7b+DT71Tv2tOHStr1L1GzIWf8A2J+hgKypMjy87zwG4DgBdcG+6V03OXmduimNMFCJRURMCsPoDZdD+LZ8hvoC9lV4F6I8bZ436srrc0CAIDD7UUrHxDnD0Wva62UOBc03YbcCCAQVBqPDnOC3o29/CSfqa323qGw0c03NMe7KGdJoPvyGXOmoGa9lX0UXO2MctI6WsahU5YTZoiy9UeaOuthavncOpJCbk08V/CGAHzgrjTWJNE6M6tTIQBAEAQGD25+Da39ln+yet6/GjEuhz9yd/CdH86P5Sr1vgZWh4kdLVNSG9p6vWqMIORZbwYySQuNyrUYpLCI28lN4uCOxa2LMGl2ZtB4kn8yGNJFusekLwPOL9D22FKPqSGHayS4zMba4zWve3G2q60NrTyt6KwcmeyYYe7J58iViduUOBu0gEEcb7rda7kWpLMThyTi8Mx9bijGFoeNbg6a5R+t29gWk741ywT1aWy2Lki97sj06bdd3SGvgUsU5LMeaK8v0vD6mK2xmaynu9zWjO3VxAG48SrWiaVvPsRXLMSMbO4pAaqJrZoi4uIDRIwk9F24A3Kv6qUXVLDIK01JEvx/EnQMa5oBu6xvfqJ4eBeZ1uplRBSis8zsaLTRvm4t45EUxXGXzhocGgA30vvtbiVw9TrZ3pKSSwdzTaKFEnJNsxqpl0IAUYNm0jCGMB3hrQfEAvY1rEUvkeMm8yb+ZVW5qEAQHhF96Agu2+HMn56A6B7MvyTlFjbsNj4lQnZwr1NeWDs6eviabdfnk5wxXC5qaQxTMLHDrBs4cHNPFp616euyNkd6JwbK3CTizo/kSrOcwiAXuY3SxnxSOc0fRc1c3ULFjJI9CdqEyEAQBAEBg9ufg2t/ZZ/snrevxoxLoc9bBOtiNIR30egq/NZiyrHqjoUm6jSwTHiGAgMZXYO15LmnKTv0uD224Lj6vZELpOcHhv7HV0u1J1R3JLK/Ja+wB74Po/wC6p+4p/Gvt/kt++o/A/uZrBmuhaWOcHgas0tlJ38d2vp610dJorKI7spZRzdXqYXT3oxw/M+DhrC8k3O42vpck37eCkeirct5/Y2WvtUNxfcvI4Wjc0DwAK0uSwim25PLIxy4xXwiY/FfCf/K1v9S0oeLEZfQ0byXuti1Gf/lA8oI+9XtR+2zSPU6C5TcSFPRiUtLgJWCwNvfBwXE1Gkeqiq08eZc02qWmnvtZ5YIdsPiIxGWSNrTFkYH3d0r3IbawsufZsOUP+6+x0Y7ajL/o/uTL2oP7636B/uUPuiXxr7f5N/e6+D8/4HtQf31v0D/cnuiXxr7f5HvdfB+f8F7hmzDI3B73ZyNQLWaD1nU3VnT7MjXLem8v8FbUbTnbHdisL8kgXUOYEBgsT7pjcXscXM32tfL2EdXaFUt4sHvJ8jo6f2eyKhJYf8nlFjDpXMjtlJdckbiAC4i3C9rLFeodjURdo1VFzzlGWq6nIBbed33k9g9SvwhvHMbwYx0TS4uLRmPGwupVTDOcczfjWbu7l4MJtnsxFX07ongB4BMUltWP4a/FO4jiPEpYtxeURmuuRHaplHJUUNUebzPLm3BNpWdCRhtfUhrT1dA9i3uola04czVSUVzN50VdFKLxSNeP1XA28NtypTrnB4ksG8ZKXRlwtDYIC1r8QihbmlkawfrG1+wDeT4FJXVO14gsmspKPUwL9vKIGwc89ojdbz2PmV5bJ1LXRfdEXtMC32l2ipajDq0RSgu7ln6Ju134p+5rgCfEoZaO6mSc48s9fI2VsJLkzRuwvwhS/Oj0FTy6Mhj1OhVESlCWra021XO1G06qZuDTbRcq0c7I7ywfHd7eo+b1qD31T8L/AASe7rO6KsFQHXtfTrVzSa6vU5Uc8u5Bfpp043i0nxdjXFtnGxtoBa/jK6kdNOSyUJXRTwe0+Lsc9rQ11yQOHrWJ6eUYtszG+LeDLNaST4G+lypt4LBWhjJI6liUkkZSI/yuQ58Iqx1Ma76EjH/ctKXiaMvoc88nJ/5pRftEfpXQv/bZHHqdNbZUcctK5sjGvbmYcrhce+FtD4VT0aTtS9Rd4SGYXSR0zi6nY2JzhYlgDSRe9jZdeVNcuqKqk10Ml7KT99f5Vr7NV8JniS7j2Un76/yp7NV8I4ku49lJ++v8qezVfCOJLuPZSfvr/Kns1XwjiS7j2Un76/yp7NV8I4ku5lMAxaQyCN7swde194IBO/q0VTV6aChvRWCWqx5wylI7m5nOYMtiQG7x1HxcVSq2dXniZLtmvnKvhtfUy80ud+bgGtt+90j/AEqSEd2OPmV85Z4tjIQGgttcFeMbl5sWbnimJG4BzWl1+0uD9O3wq9o4ueEvJkVrSXMkNNUPjcHxuLXDcWmx/wDXYu1OuM1iSyjnptPKNmbG7T90gxyWEzRe40D29YHAjiPGOoeb12i4D3o+F/g6FF2/yfUvNrNoG0kVwA6R9wxp3ab3H9UaeG4HatNFo3qZ48l1ZvbZuI1JXVskzzJK8vceJ9AG4DsC9bVTCqO7BYRzpScnllBSGDwhAUsDwkNr6WWMWHOtzN4C9xcepcfX6RRi5w+qJ6p80mbnXHLRi6z37vF6AvH7S/8Akz/3yO/o/wBmJRVEtF3hu8+BdvYn7k/RHN2l4Y+pgq78Y/5TvSV7mrwL0PMT8TK2Di8zPCfMCVpqX/xM2p8aJrQ++d4G+ly4lvRHSXUvVCbEe5Q482GVo/7aU+RhP3LevxIwzmnk9NsTov2iL+YLpaj9tkcep1hW07ZGFr/em19bbiDv8S5tc5QlvR6m8kmsMjEuHwCqEeboEa67na9HN5PKunG+3gOeOZXcI7+DMewVN1fxu9aqe139/wAEvCgPYKm6v43etPa7+/4HCgPYKm6v43etPa7+/wCBwoD2Cpur+N3rT2u/v+BwoFli+E07InOb0XDd0ibnqsSpaNTdKxJ816Gk64KOUYnAfyiPwn+Vyuav9lkVXiRkcajtM7tsfN67qtpnmtEli/UV8ON237fQAB6FpYsM3h0LpRm4QGuttoGisc8DpOjjBPY0vt6Su1s2KVbfzKWpb3sGDXQKxdYZWuhlbI3e2/naW/eor6lbBwZtCW68l1thiJnq5XX6LSY29gYSPOcx8axs6hVaePd839SW6W9NmGV4iCAID1riCCDYg3BG8EagrDSawwbXwur52GOT4zQT4dzh5bryltfDm4dmdCLysltWMOc6Hh6AvIbSps9ok1F8/kd3R2R4SWSjkPUfIqHBs+F/ZlriQ7ou8OYbnRdvY1U4yk2sckc7aM4tRSZhK6B3OP6J98TuPE3Xs6px3FzPN2Re8+R80rnxuD2tNxfe021Fks3Jx3WxHei8pECxvlcxGCpnijbAAx5YLxuJswka3fv1K58tNFvqX4yeMmLl5Y8WO6WJvghZ/VdYWkgbb7LnbHbnEzTU7XVDg2ogcZBzcbQ9r2tvbobrOO7rU0tNSlHd645kcJyblk19h1c+CWOaM2fG5r2EgEBzTcaHetpRUlhmyOl9msalqYYRUSC0sLC85Wtu5zATY2sLlRT08a4KyC5mim5S3X0PHUkPPmPnLR/H0PC9r7t+l1OrbODvbvPsR7sd7GeRe+xVJ+kDytUHtF/wfyb8OHc99iqT9IHlantF/wAH8jhw7j2KpP0geVqe0X//AJ/yOHD4jH4nSQsy83Jnve+7Tq1CsUWTnnfjg0nGK6MsrKyRl7g0gbMxzjYAm5/dKpa62EKmpNFjT0znNbqySJ80cri9uoGgJHVrx8K5untUofpZauplXLEkfSmIwgCA1ztjLmq3/qhrf4QfvXe0CxSvqc+95mYRXCEs8WnLInOb77S3lH3XUOos3K3IkqjvSwZGjpzLMyMnKZJA0k8C51ifOrFk1VS5JdEEt6WCV7X7Iw01PzsTnXaWghxBzZjbTQWPHwXXJ2ftK267cmlzz9CxdRGMcoq7M7GQz0rZXvfnfmtlIs2zi0aW1Omq11u1Lar3CKWF+TNVEZRyzDbKYAyoqXxSP6MYcTlNi6zsuhPDj5OtXNdrZU0xnBc5d/LkRVVKUmn5HztngbKSZrY3Ete3MA43LbGx16urxrOzdXPUQbmuaF1ag+RJ9jD/AMJH4X/aOXN2h/8AIl9P4RNT4EZxUiUIDxAeoAgOWNrHXrqs9dTP9q5Wa/CgzElbg2PywMyNw6P4lKBbqsGN/pUFPVsyzXBU5g6P2UijMdO2U2ZzTL62/MFgTwC2sc41Zh1IEk58zIuhg58tzkRfGGvDde26/H/2sKd3Czj9QxHex5F93JQ9+d/n7qg4uq+H/fuSbtXcdyUPfnf5+6nF1Xw/79xu1dx3JQ9+d/n7qcXVfD/v3G7V3MZjfc0QDmS9EAl5ebBu62pA7VZ08rZZ4iwRzUV4SJ1O21Ey9nOkI4MabeV1gfKs6jTX2rFct1efck09tVbzOO9/BjJ+UgA9CnJH678vmaD6VUWwamv1ybfct+97E/0pJdizPKbXDSNsEbeoMc4+MvebnyK5TsqiqOFn7lS7W2WvMig/lIxI/wDWaOwRR/e1TrRU9vyQ8aRkaTlYrG/jIoH9tnsPjs4jzKOWz4Po2jZXvsV5eV2p/Np4R4S93oIWq2fHzkzPHfY87uM/4Z2+Tpm24E6kDsG7xLp1wUIKK8ipJ5eWFualCGHnq2kph+e6Vx8DIZLX8Z8y5m07MV4LeljzbMttNQmCqlZuGcub8lxzNt4L28S6GhtVuni/lh/QitjuzaLatxSeYNEsr3hu4OJNuF+09p1UtWmqqbcIpNmspyl1YpcUnjYWRyvax29rXEDXfbq8SxZpqrJb0opsKcksJlGkqnxOD43FjhuLTY/+uxSWVQsjuzWUYUmnlHtVVSSvzyOc950uTc9gHqCxXXCqOIrCDbk8s2fg1HzUEcfFrRf5R1d5yV5i+ziWSn3L0I4ikZ5lC22tyVRdsvIm3UfXcLO3yrHFkN1DuFnb5U4shuodws7fKnFkN1DuJnb5U4shuo4/2gdeqqD1zS/aOXTr8CNH1LFrbkAcSB5dFtJ4TMI2h/8A0BEGVdMwcKYfaPH3KtpZNp5NpLBq0q0anRNCzLFGDpZjBrp+aFYg1uorSXMrtN92vgW2UYwe5D1HyLG8u4wxlPUfIm8u4wxlPUfIm8u4wyAcpWIHPHTg6Ac44dpuGDxAE/vBT0rPM1ZCVOahAEAQBAfUUZcQ1ouSbAICeUUGSNrPitA8fFSojZVJToYL7kdpDVYjPXW/BQM5mM23udvIPycx/wDsavObRu35YR06YbsTY22uzfdTA+O3PMGnDO3fkJ4dYPh61rs7W+zzxLwvr8vmYuq31ldTVMsbmuLXAtcDYgixB6iCvWRkpLei8o57WOTPlZAQF1hc7Y5o3u9617SdL6A9XnUOphKdUox6m0GlJNm1YpGuAc0gtIuCNQQvLNNPDL65l4yucBbQqF0o23j69kHdQ86xwV3M7w9kHdQ86cFdxvD2Qd1DzpwV3G8PZB3UPOnBXcbxx/XPzSyO63uPlcSuhDwo0fUq4NHmqIW/GljHleAk/Cwiecvc5fiMd+FMwf8AkmKh08d1NGW8mtnKw+hhG++Vlv8Ay2AHvsX2T1UgYn0MbyBNAqqiw/6I/nCj1PRGavM3gqhMEAKA5Y2sxbuqsnqL3D5Dk+Q3oR/whq9Vpq+HVGJz7JZkzEqcjKFVMW2tbVQXWOGMEkIqRb93O6h51B7TIk4SHdzuoedPaZDhId3O6h509pkOEi/w/aF0PvYoyeLjmv6dB4Flaqa7GHTFl77dJu9x/wAXrWfa5/IxwIl9gdJiOLycxE3LHf8ACPDSI2D9dxOp/VBuerqrajWPH6n9CWulJ8jozZfAIaGmZTQjosGpPvnuOrnuPWT5NBuC4s5OTyyykZZagxmL4DT1P42ME8HDovH7w1t2HRWKNVbR+3LHy8jSdcZ9UR93JzTX0lmA6rs9ORdBbavx0X5/sh9lj3KG0WyFLT0VRK1ry+KKSUOL9SY2OdYi2Wxtbcta9rah2JvGO2A9PDdNXYZibJ3NjZfnHGwYRqT1AjQruQ11MlzePUqOuRNNnqWvieAxjmsJ6Qk0ZbibE3v8lVtXZpLI5by/l1JK1YmTtcQtHiAIAgPmV1gT1A+hDJyNe+vWrcehhmY2NizV9I3/ALiHyCRpPmC1s8LCJPy3OviXggjHnefvWtPRmWa/cpX0MI3/AMrzf+Xxdk0f2ciqR6mJdDFcgn5VUfMj+cKPU9EKvM3eqhOEBG+UTFu5sOqJAbOLObZ15pDkBHgvfxKxpK+JdGJpZLdi2cygL1Jzj1ATfkgp4Za50M8bJY5IHjJI1rmlzXMeDZw3gB3lXO2mv+FNeTLGn8TRs2t5JcIkJPc5YT8SSRo8Tc1h5FxVqLF5lvdRi5+Q/DHbn1LPkyMP80ZW61ViMbqI7jvJHRQ1NFC2apLaiV7Hlz4rgMhfIMtowAbtG8HRbLVTwY3ESGHkOw0HWSqd2OkjA/hjC1eqsZndRl6DkowiIg9zZyO+Pe8fRJy+ZRu+x+ZndRMaOkjiYI4mNjY3QNY0NaPA0aBRN5MlZAEAQBAYna2mdLQ1UbBdz6eZrR1l0bgB5StoPEkzD6HMWCYiYJ4p2jNzb2vt1gHUX4XFxftXRazyKq5M3jRbe4dI0O7paw8WyAscD1G4sfCCQo8Mkyi69t+H/pkH1jfWmGZyh7b8P/TIPrG+tMMZQ9t+H/pkH1jfWmGMoe2/D/0yD6xvrTDGUUK7bCg5qS1XATkdYCRtycpsBqmGMo5lCtroCQbBTxx4hTPlcGMbJmLnaAWa4i58NlpZnd5BGR5VsSinxB74XtkZzcYDmm4JDddfGsVJpcwRBu8eELeXRhG2+U7bCCpYynpyXta/O+SxDSQ1zWtbmFzvJJ3brX1VeMe5pKXkZHkChcaipfboiNjSeF3OJA8jSodT0RvV5m61UJggNR8veKdGmpQd5dM4djQWMv2Euf8ARXX2VXzlP6FbUS5YNPLtFQICS8mtVzeKUjr2BkLD284x0YHlcFU1sc0SJaXiaOmF5kvhARHbD8uwn9om/wDzSLZdGCXLUBAEAQBAEAQBAau2w5I2TyumpJGxOeS50TwebzHUlpbqy51tYjXSysQ1GFhkUq880Rj3GcQ77TfTl/01J7RHsa8Jj3GcQ77TfTl/009oj2HCY9xnEO+0305f9NPaI9hwmPcZxDvtN9OX/TT2iPYcJj3GcQ77TfTl/wBNPaI9hwmWeM8k9dBTzTvlpy2KKSRwa+S5DGFxAvHvsFmOoi2kOE0arV4yZvY3AZa6qZTxFgeQ513khoDWkm5aCfMorZqEcsYzyKe1uDyUlXLTyFrnx5blhJb0mNcLEgHcRwSqW9HIxjkYuCIuc1o3ucAPCTYLdvCyDclHyLVZcOdqIGN4lmd7vE0taPOqL1K7DhG2tl9nYKGAQQA2vdznWL3uIALnEcdAOoAABVpycnlkqWDLrUyEBrTlE5N566oNTFUMDsjWCORpAAbc6SNvxLj73iulo9dGmG5JfUgsq33nJqfGdk62mcWywO04stI3Xcbsvbx2XUr12nseFJZ7PkRPSXKO/u8u59YXsdiFQ0OhpJXNdYhxAjaQdxDpC0EdoW89XTB4lJfyRqqb8iRYLyd10dVCXGFj2SxvsXuPvXNfva0jcCuddtfTvNSTy0/L5F2vQWbnFysI33NM1jS57g1o1JcQAB2k7lxzcilVyiUecx0wlrZRboUsZkAvuLpNGAduZScN+fIxki20lfi8tXhzzSU9Oefk5mOWYyOc7mX5ucdGMrQWZrWuQSLraKrSeWOZIzt4+n0xGhnpQL3lYO6Kew4mSLVt99i1a8PPhYySXCMbpqpuannjlHHI4OI8IGo8a0aa6mTILACAIAgCAIAgCAIAgCAIDFbV0L56Kpgjtnlhkjbc2F3sLRc8BqsxeHkHMvtEqLPPPUpazMHOE12ty3DrkN0tYrsxzJZIG1nBM+RvBY4K0VDq6ie3mntDWTESZnZbfg5GNNrXVHUWOSxgkisH3yw7JU7Kruuatyd1O6LBCXACONjScwdc/m62/OUmknn9LMT7kLo6HDYpo+crZTlLX5o4GvZoQbO/CAg6cAVNcp4xDmYi+50LgvKFhlU4MiqmZ3GwY8OjcXHcAJALnwXXMlVOPVEmSULQyEAQFrX4jDCxz5ZGMa0Fzi5wFgOOqYZlLPI09Nymwy4hE2CN0pknjYCTkaAXNYLaXNvAFhaGxviz5fIvS1kIU8GHP5m6JZGtF3EAdZIA8pWSgaR2+29lknlZhgc90QL5J2NzBjY/fFvC197jprYX3jarSJz4lnLsizLU7tXCj9f6KuxOFPxDFa44hG+aKJznMbK55jY57xzQay+UgxcLbrdasWNRgt3qVF1NzUlJHE0MiY2Ng3NY0NaPABoFVbybGt+Xynm7jgmhzh0M4JcwkOaHsc3NcajpZR+8FY027vYkayNgYEZDTQGa/OGKPnL78+QZ79t7qB9eRsRDlH2QpjST1MFOG1cbC9kkOaOTMN5vGRmOW++6krniST6GGi65IKieTCoHVBe5xz5XPJLnR53ZCSdSLbj1WS7Cm90LoTNRGQgCAIAgCAIAgCAIAgPH7igOMXRgkkjUkrrLoiM9bA3q9KzlmDaXIlgdPVmpjqYhMyIROjY+7msMhkzlovZpdkZe2/KOpU9Q3HDXI3RtT3PMK/QYfo/7qvxZ92ZwfTeT7ChqKKG/yf8AdOJPuMEmWhkIAgNR7R7A4d3T+IPTddxMsxJJ1JuXqeFskuTNWiXt2NoIW0wipo2ZJ45GkXz52tdYuffM+1zo4kKNzk85ZnBHOVvBIJpYnStc4hth+EkDRqdzA7KD22upKZOPQwyWbBYFTUtK0U8QZn6TyCS5x1Au5xJNuAvYKOyblLmzKJItDIQBAEAQBAEB/9k="
            alt="Splash Pic"
            className="object-cover w-fit h-52 mx-auto rounded-xl"
          />
          <h1 className="text-2xl font-semibold mt-2 mb-2 text-center">
            Smart Health Checkup
          </h1>
          <p className="text-ellipsis text-center w-fit">
            Experience the future of healthcare with our smart checkup feature.
            Get instant health insights and personalized recommendations
          </p>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onFinish();
    }
  };

  const handleSkip = () => {
    onFinish();
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gray-100 p-4">
      <button
        className="self-end text-lg text-blue-600 font-bold md:mb-20 md:mr-20 mb-1  w-32 px-5 py-2"
        onClick={handleSkip}
      >
        Skip
      </button>

      <div className="flex-1 flex justify-center items-center">
        {screens[currentScreen].content}
      </div>

      <div className="flex justify-end w-full">
        <button
          className="bg-blue-600 text-white  rounded-full md:mb-20 md:mr-20 mb-10 mr-5 w-32 px-5 py-2"
          onClick={handleNext}
        >
          {currentScreen === screens.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

const SplashScreenWrapper = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/login");
  };

  return <SplashScreen onFinish={handleFinish} />;
};

export default SplashScreenWrapper;
