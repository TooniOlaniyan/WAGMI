import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import {db} from '../firebase.config'
function SignUp() {
  const navigate = useNavigate()
    const [isHidden , setIsHidden] = useState(false)
    const [confirmIsHidden , setConfirmIsHidden] = useState(false)
      const [formData, setFormData] = useState({
        name: '',
        username:'',
        email: '',
        number:'',
        password: '',
        confirmPassword:'',
        country:''
      })
      const { name, username, email,number ,  password , confirmPassword } = formData

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredential.user
           updateProfile(auth.currentUser, {
             displayName: username,
           })
        const formDataCopy = {...formData}
        formDataCopy.timestamp = serverTimestamp()
        formDataCopy.deposit = '$0'
        formDataCopy.profit = '$0'
        formDataCopy.withdraw = '$0'
        await setDoc(doc(db , 'users' , user.uid) , formDataCopy)
        navigate('/dashboard')
     
        
        
      } catch (error) {
        console.log('ERROR')
        
      }
      
     

    }

    const handleChange = (e) => {
          setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
          }))

    }

  return (
    <Main>
      <div className='header'>
        <p className='head'>Welcome To</p>
      </div>
      <div className='logoContainer'>
        <img src={logo} alt='' />
        <Link to='/'>
          <p className='logo'>Trade Rebublic</p>
        </Link>
      </div>
      <div className='flag'>
        <div className='line'></div>
        <svg
          width='40'
          height='20'
          viewBox='0 0 40 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='20' fill='#8F1B11'></rect>
          <rect y='11.1111' width='40' height='2.22223' fill='white'></rect>
          <rect y='15.5556' width='40' height='2.22223' fill='white'></rect>
          <rect y='6.66669' width='40' height='2.22223' fill='white'></rect>
          <rect y='2.22223' width='40' height='2.22223' fill='white'></rect>
          <rect width='15' height='8.88891' fill='#1B2F5A'></rect>
          <path
            d='M7.5 2L8.06129 3.72746L9.87764 3.72746L8.40818 4.79509L8.96946 6.52254L7.5 5.45492L6.03054 6.52254L6.59182 4.79508L5.12236 3.72746L6.93872 3.72746L7.5 2Z'
            fill='white'
          ></path>
        </svg>
        <div className='line'></div>
      </div>

      <Form onSubmit={handleSubmit} >
        <div className='formControl'>
          <label htmlFor=''>Name*</label>
          <input onChange={handleChange} type='text' id='name' value={name} placeholder='Full Name' />
        </div>
        <div className='formControl'>
          <label htmlFor=''>Username*</label>
          <input onChange={handleChange} type='text' id='username' value={username}  placeholder='Username' />
        </div>
        <div className='formControl'>
          <label htmlFor=''>Email*</label>
          <input onChange={handleChange} type='text' id='email' value={email} placeholder='Email' />
        </div>
        <div className='formControl'>
          <label htmlFor=''>Phone</label>
          <input onChange={handleChange} className='number' type='number' id='number' value={number} placeholder='Phone Number' />
        </div>
        <div className='formControl'>
          <label htmlFor=''>Password*</label>
          <input onChange={handleChange}
            className='formInput'
            type={isHidden ? 'text' : 'password'}
            placeholder='Password'
            id='password'
            value={password}
          />
          {!isHidden ? (
            <AiOutlineEye
              onClick={() => setIsHidden(!isHidden)}
              className='icon'
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setIsHidden(!isHidden)}
              className='icon'
            />
          )}
        </div>
        <div className='formControl'>
          <label htmlFor=''>Confirm Password*</label>
          <input onChange={handleChange}
            className='formInput'
            type={confirmIsHidden ? 'text' : 'password'}
            placeholder='Confirm Password'
            id='confirmPassword'
            value={confirmPassword}
          />
          {!confirmIsHidden ? (
            <AiOutlineEye
              onClick={() => setConfirmIsHidden(!confirmIsHidden)}
              className='icon'
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setConfirmIsHidden(!confirmIsHidden)}
              className='icon'
            />
          )}
        </div>
        <div className='formControl'>
          <label htmlFor=''>Country</label>
          <select id='country' name='country' onChange={handleChange} class='form-control'>
            <option value='United States'>--Select Country-- </option>
            <option value='United States'>United States(US) </option>
            <option value='Afghanistan'>Afghanistan</option>
            <option value='Åland Islands'>Åland Islands</option>
            <option value='Albania'>Albania</option>
            <option value='Algeria'>Algeria</option>
            <option value='American Samoa'>American Samoa</option>
            <option value='Andorra'>Andorra</option>
            <option value='Angola'>Angola</option>
            <option value='Anguilla'>Anguilla</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
            <option value='Argentina'>Argentina</option>
            <option value='Armenia'>Armenia</option>
            <option value='Aruba'>Aruba</option>
            <option value='Australia'>Australia</option>
            <option value='Austria'>Austria</option>
            <option value='Azerbaijan'>Azerbaijan</option>
            <option value='Bahamas'>Bahamas</option>
            <option value='Bahrain'>Bahrain</option>
            <option value='Bangladesh'>Bangladesh</option>
            <option value='Barbados'>Barbados</option>
            <option value='Belarus'>Belarus</option>
            <option value='Belgium'>Belgium</option>
            <option value='Belize'>Belize</option>
            <option value='Benin'>Benin</option>
            <option value='Bermuda'>Bermuda</option>
            <option value='Bhutan'>Bhutan</option>
            <option value='Bolivia'>Bolivia</option>
            <option value='Bosnia and Herzegovina'>
              Bosnia and Herzegovina
            </option>
            <option value='Botswana'>Botswana</option>
            <option value='Bouvet Island'>Bouvet Island</option>
            <option value='Brazil'>Brazil</option>
            <option value='British Indian Ocean Territory'>
              British Indian Ocean Territory
            </option>
            <option value='Brunei Darussalam'>Brunei Darussalam</option>
            <option value='Bulgaria'>Bulgaria</option>
            <option value='Burkina Faso'>Burkina Faso</option>
            <option value='Burundi'>Burundi</option>
            <option value='Cambodia'>Cambodia</option>
            <option value='Cameroon'>Cameroon</option>
            <option value='Canada'>Canada</option>
            <option value='Cape Verde'>Cape Verde</option>
            <option value='Cayman Islands'>Cayman Islands</option>
            <option value='Central African Republic'>
              Central African Republic
            </option>
            <option value='Chad'>Chad</option>
            <option value='Chile'>Chile</option>
            <option value='China'>China</option>
            <option value='Christmas Island'>Christmas Island</option>
            <option value='Cocos (Keeling) Islands'>
              Cocos (Keeling) Islands
            </option>
            <option value='Colombia'>Colombia</option>
            <option value='Comoros'>Comoros</option>
            <option value='Congo'>Congo</option>
            <option value='Congo, The Democratic Republic of The'>
              Congo, The Democratic Republic of The
            </option>
            <option value='Cook Islands'>Cook Islands</option>
            <option value='Costa Rica'>Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value='Croatia'>Croatia</option>
            <option value='Cuba'>Cuba</option>
            <option value='Cyprus'>Cyprus</option>
            <option value='Czech Republic'>Czech Republic</option>
            <option value='Denmark'>Denmark</option>
            <option value='Djibouti'>Djibouti</option>
            <option value='Dominica'>Dominica</option>
            <option value='Dominican Republic'>Dominican Republic</option>
            <option value='Ecuador'>Ecuador</option>
            <option value='Egypt'>Egypt</option>
            <option value='El Salvador'>El Salvador</option>
            <option value='Equatorial Guinea'>Equatorial Guinea</option>
            <option value='Eritrea'>Eritrea</option>
            <option value='Estonia'>Estonia</option>
            <option value='Ethiopia'>Ethiopia</option>
            <option value='Falkland Islands (Malvinas)'>
              Falkland Islands (Malvinas)
            </option>
            <option value='Faroe Islands'>Faroe Islands</option>
            <option value='Fiji'>Fiji</option>
            <option value='Finland'>Finland</option>
            <option value='France'>France</option>
            <option value='French Guiana'>French Guiana</option>
            <option value='French Polynesia'>French Polynesia</option>
            <option value='French Southern Territories'>
              French Southern Territories
            </option>
            <option value='Gabon'>Gabon</option>
            <option value='Gambia'>Gambia</option>
            <option value='Georgia'>Georgia</option>
            <option value='Germany'>Germany</option>
            <option value='Ghana'>Ghana</option>
            <option value='Gibraltar'>Gibraltar</option>
            <option value='Greece'>Greece</option>
            <option value='Greenland'>Greenland</option>
            <option value='Grenada'>Grenada</option>
            <option value='Guadeloupe'>Guadeloupe</option>
            <option value='Guam'>Guam</option>
            <option value='Guatemala'>Guatemala</option>
            <option value='Guernsey'>Guernsey</option>
            <option value='Guinea'>Guinea</option>
            <option value='Guinea-bissau'>Guinea-bissau</option>
            <option value='Guyana'>Guyana</option>
            <option value='Haiti'>Haiti</option>
            <option value='Heard Island and Mcdonald Islands'>
              Heard Island and Mcdonald Islands
            </option>
            <option value='Holy See (Vatican City State)'>
              Holy See (Vatican City State)
            </option>
            <option value='Honduras'>Honduras</option>
            <option value='Hong Kong'>Hong Kong</option>
            <option value='Hungary'>Hungary</option>
            <option value='Iceland'>Iceland</option>
            <option value='India'>India</option>
            <option value='Indonesia'>Indonesia</option>
            <option value='Iran, Islamic Republic of'>
              Iran, Islamic Republic of
            </option>
            <option value='Iraq'>Iraq</option>
            <option value='Ireland'>Ireland</option>
            <option value='Isle of Man'>Isle of Man</option>
            <option value='Israel'>Israel</option>
            <option value='Italy'>Italy</option>
            <option value='Jamaica'>Jamaica</option>
            <option value='Japan'>Japan</option>
            <option value='Jersey'>Jersey</option>
            <option value='Jordan'>Jordan</option>
            <option value='Kazakhstan'>Kazakhstan</option>
            <option value='Kenya'>Kenya</option>
            <option value='Kiribati'>Kiribati</option>
            <option value="Korea, Democratic People's Republic of">
              Korea, Democratic People's Republic of
            </option>
            <option value='Korea, Republic of'>Korea, Republic of</option>
            <option value='Kuwait'>Kuwait</option>
            <option value='Kyrgyzstan'>Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">
              Lao People's Democratic Republic
            </option>
            <option value='Latvia'>Latvia</option>
            <option value='Lebanon'>Lebanon</option>
            <option value='Lesotho'>Lesotho</option>
            <option value='Liberia'>Liberia</option>
            <option value='Libyan Arab Jamahiriya'>
              Libyan Arab Jamahiriya
            </option>
            <option value='Liechtenstein'>Liechtenstein</option>
            <option value='Lithuania'>Lithuania</option>
            <option value='Luxembourg'>Luxembourg</option>
            <option value='Macao'>Macao</option>
            <option value='Macedonia, The Former Yugoslav Republic of'>
              Macedonia, The Former Yugoslav Republic of
            </option>
            <option value='Madagascar'>Madagascar</option>
            <option value='Malawi'>Malawi</option>
            <option value='Malaysia'>Malaysia</option>
            <option value='Maldives'>Maldives</option>
            <option value='Mali'>Mali</option>
            <option value='Malta'>Malta</option>
            <option value='Marshall Islands'>Marshall Islands</option>
            <option value='Martinique'>Martinique</option>
            <option value='Mauritania'>Mauritania</option>
            <option value='Mauritius'>Mauritius</option>
            <option value='Mayotte'>Mayotte</option>
            <option value='Mexico'>Mexico</option>
            <option value='Micronesia, Federated States of'>
              Micronesia, Federated States of
            </option>
            <option value='Moldova, Republic of'>Moldova, Republic of</option>
            <option value='Monaco'>Monaco</option>
            <option value='Mongolia'>Mongolia</option>
            <option value='Montenegro'>Montenegro</option>
            <option value='Montserrat'>Montserrat</option>
            <option value='Morocco'>Morocco</option>
            <option value='Mozambique'>Mozambique</option>
            <option value='Myanmar'>Myanmar</option>
            <option value='Namibia'>Namibia</option>
            <option value='Nauru'>Nauru</option>
            <option value='Nepal'>Nepal</option>
            <option value='Netherlands'>Netherlands</option>
            <option value='Netherlands Antilles'>Netherlands Antilles</option>
            <option value='New Caledonia'>New Caledonia</option>
            <option value='New Zealand'>New Zealand</option>
            <option value='Nicaragua'>Nicaragua</option>
            <option value='Niger'>Niger</option>
            <option value='Nigeria'>Nigeria</option>
            <option value='Niue'>Niue</option>
            <option value='Norfolk Island'>Norfolk Island</option>
            <option value='Northern Mariana Islands'>
              Northern Mariana Islands
            </option>
            <option value='Norway'>Norway</option>
            <option value='Oman'>Oman</option>
            <option value='Pakistan'>Pakistan</option>
            <option value='Palau'>Palau</option>
            <option value='Palestinian Territory, Occupied'>
              Palestinian Territory, Occupied
            </option>
            <option value='Panama'>Panama</option>
            <option value='Papua New Guinea'>Papua New Guinea</option>
            <option value='Paraguay'>Paraguay</option>
            <option value='Peru'>Peru</option>
            <option value='Philippines'>Philippines</option>
            <option value='Pitcairn'>Pitcairn</option>
            <option value='Poland'>Poland</option>
            <option value='Portugal'>Portugal</option>
            <option value='Puerto Rico'>Puerto Rico</option>
            <option value='Qatar'>Qatar</option>
            <option value='Reunion'>Reunion</option>
            <option value='Romania'>Romania</option>
            <option value='Russian Federation'>Russian Federation</option>
            <option value='Rwanda'>Rwanda</option>
            <option value='Saint Helena'>Saint Helena</option>
            <option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
            <option value='Saint Lucia'>Saint Lucia</option>
            <option value='Saint Pierre and Miquelon'>
              Saint Pierre and Miquelon
            </option>
            <option value='Saint Vincent and The Grenadines'>
              Saint Vincent and The Grenadines
            </option>
            <option value='Samoa'>Samoa</option>
            <option value='San Marino'>San Marino</option>
            <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
            <option value='Saudi Arabia'>Saudi Arabia</option>
            <option value='Senegal'>Senegal</option>
            <option value='Serbia'>Serbia</option>
            <option value='Seychelles'>Seychelles</option>
            <option value='Sierra Leone'>Sierra Leone</option>
            <option value='Singapore'>Singapore</option>
            <option value='Slovakia'>Slovakia</option>
            <option value='Slovenia'>Slovenia</option>
            <option value='Solomon Islands'>Solomon Islands</option>
            <option value='Somalia'>Somalia</option>
            <option value='South Africa'>South Africa</option>
            <option value='South Georgia and The South Sandwich Islands'>
              South Georgia and The South Sandwich Islands
            </option>
            <option value='Spain'>Spain</option>
            <option value='Sri Lanka'>Sri Lanka</option>
            <option value='Sudan'>Sudan</option>
            <option value='Suriname'>Suriname</option>
            <option value='Svalbard and Jan Mayen'>
              Svalbard and Jan Mayen
            </option>
            <option value='Swaziland'>Swaziland</option>
            <option value='Sweden'>Sweden</option>
            <option value='Switzerland'>Switzerland</option>
            <option value='Syrian Arab Republic'>Syrian Arab Republic</option>
            <option value='Taiwan'>Taiwan</option>
            <option value='Tajikistan'>Tajikistan</option>
            <option value='Tanzania, United Republic of'>
              Tanzania, United Republic of
            </option>
            <option value='Thailand'>Thailand</option>
            <option value='Timor-leste'>Timor-leste</option>
            <option value='Togo'>Togo</option>
            <option value='Tokelau'>Tokelau</option>
            <option value='Tonga'>Tonga</option>
            <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
            <option value='Tunisia'>Tunisia</option>
            <option value='Turkey'>Turkey</option>
            <option value='Turkmenistan'>Turkmenistan</option>
            <option value='Turks and Caicos Islands'>
              Turks and Caicos Islands
            </option>
            <option value='Tuvalu'>Tuvalu</option>
            <option value='Uganda'>Uganda</option>
            <option value='Ukraine'>Ukraine</option>
            <option value='United Arab Emirates'>United Arab Emirates</option>
            <option value='United Kingdom'>United Kingdom</option>
            <option value='United States Minor Outlying Islands'>
              United States Minor Outlying Islands
            </option>
            <option value='Uruguay'>Uruguay</option>
            <option value='Uzbekistan'>Uzbekistan</option>
            <option value='Vanuatu'>Vanuatu</option>
            <option value='Venezuela'>Venezuela</option>
            <option value='Viet Nam'>Viet Nam</option>
            <option value='Virgin Islands, British'>
              Virgin Islands, British
            </option>
            <option value='Virgin Islands, U.S.'>Virgin Islands, U.S.</option>
            <option value='Wallis and Futuna'>Wallis and Futuna</option>
            <option value='Western Sahara'>Western Sahara</option>
            <option value='Yemen'>Yemen</option>
            <option value='Zambia'>Zambia</option>
            <option value='Zimbabwe'>Zimbabwe</option>
          </select>
        </div>
        <button>Sign Up</button>
        <div className='checkAccount'>
          <p>Got an account?</p>
          <Link to='/sign-in' style={{ textDecoration: 'none' }}>
            <span>Sign In</span> <BsArrowRight />
          </Link>
        </div>
      </Form>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  padding: 3rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.gray2};

  .flag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .line {
      width: 45vw;
      height: 1.6px;
      background-color: ${({ theme }) => theme.gray};
      opacity: 0.6;
      @media screen and (max-width: 890px) {
        width: 35vw;
        justify-content: space-between;
      }
    }
  }
  .header {
    .head {
      font-size: 50px;
      font-weight: 400;
      font-family: 'Permanent Marker', cursive;
    }
  }
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: baseline;
    /* background-color: green; */
    a {
      text-decoration: none;
    }
    img {
      width: 3.5rem;
      height: 2rem;
      object-fit: contain;
      @media screen and (max-width: 890px) {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .logo {
      color: ${({ theme }) => theme.bgRed};
      font-size: 30px;
      font-weight: 700;
      font-family: 'Abyssinica SIL', serif;
      letter-spacing: 0.2rem;
      @media screen and (max-width: 890px) {
        font-size: 25px;
        letter-spacing: 0;
      }
    }
  }
  .checkAccount {
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    @media screen and (max-width: 890px) {
      flex-direction: column;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.bgRed};
      display: flex;
      justify-content: center;
      gap: 1rem;
      font-weight: 900;
    }
  }
`
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 30vw;
    @media screen and (max-width: 890px) {
      width: 95vw;
    }

    padding: 0.5rem 1rem;
    button {
      width: 100%;
      padding: 0.5rem;
      border: none;
      font-size: 20px;
      background-color: ${({ theme }) => theme.bgRed};
      color: ${({ theme }) => theme.text2};
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    /* background-color: red; */
    .formControl {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      gap: 0.8rem;
      position: relative;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        
      }
      .icon {
        position: absolute;
        top: 3rem;
        right: 1.5rem;
        font-size: 22px;
        cursor: pointer;
      }
      label {
        color: ${({ theme }) => theme.bgRed};
      }
      input,
      select {
        width: 100%;
        padding: 1rem 0.5rem;
        border: 2px solid ${({ theme }) => theme.gray};
        background-color: transparent;
      }
    }
  `
export default SignUp