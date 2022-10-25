import React from 'react'

function ProofOfPayment() {
  return (
    <Container>
      <Main>
        <Button onClick={() => setBank(false)}>
          <AiOutlineClose className='icon' />
        </Button>
        <div className='request'>
          <p>Request Widthdraw</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='formControl'>
            <input
              onChange={handleChange}
              id='amount'
              value={amount}
              type='text'
              required
              placeholder='Enter Amount'
            />
            <label htmlFor=''>Enter Amount to Withdraw</label>
          </div>
          <div className='formControl'>
            <select
              onChange={handleChange}
              id='bankname'
              value={bankname}
              name='bankname'
              required
            >
              <option selected='selected' value='0'>
                --Choose Bank --
              </option>
              <option value='JPMORGAN'>JPMORGAN </option>
              <option value='BANK OF AMERICA'>BANK OF AMERICA</option>
              <option value='WELLS FARGO'>WELLS FARGO</option>
              <option value='CITIBANK'>CITIBANK</option>
              <option value='US BANCORP'>U.S. BASNCORP</option>
              <option value='OTHERS'>OTHERS</option>
            </select>
            <label htmlFor=''>Select Bank</label>
          </div>
          <div className='withdraw'>
            <button>Withdraw</button>
          </div>
        </form>
      </Main>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.901);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray2};
  width: 50%;
  height: 50%;
  border-radius: 1.6rem;
  padding: 13rem 3rem;
  gap: 1rem;
  position: relative;
  margin-top: -12rem;
  @media screen and (max-width: 890px) {
    width: 90vw;
  }
  
  
  `

export default ProofOfPayment