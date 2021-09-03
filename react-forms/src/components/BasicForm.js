import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@'); 

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(isNotEmpty);
  const {
    value: secondNameValue,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: secondNameReset
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(isEmail);

  let formIsValid = false;

  if(firstNameIsValid && secondNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log('Submitted!!');
    console.log(firstNameValue, secondNameValue, emailValue);

    firstNameReset();   
    secondNameReset();
    emailReset();
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const secondNameClasses = secondNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={firstNameValue} 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className='error-text'>Please enter a last name</p>}
        </div>
        <div className={secondNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text'
            id='name'
            value={secondNameValue} 
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && <p className='error-text'>Please enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={emailValue} 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className='error-text'>Please enter a last name</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
