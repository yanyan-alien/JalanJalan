function basicInfoValidator({
  name,
  postalCode,
  addressLine1,
  addressLine2,
  gender,
  birthday,
}) {
  const error = {
    name: "",
    postalCode: "",
    addressLine1: "",
    addressLine2: "",
    gender: "",
    birthday: "",
  };

  let allValid = true;
  // Name
  if (name.length == 0) {
    error.name = "Name cannot be empty";
    allValid = false;
  } else if (!name.match(/^[a-zA-Z\s]*$/)) {
    error.name = "Only letters allowed";
    allValid = false;
  }

  // Postal Code
  if (postalCode.length == 0) {
    error.postalCode = "Postal Code cannot be empty";
    allValid = false;
  } else if (postalCode.length != 6) {
    error.postalCode = "Invalid postal code";
    allValid = false;
  } else if (!postalCode.match(/^[0-9]*$/)) {
    error.postalCode = "Only numbers allowed";
    allValid = false;
  }

  // Gender
  if (!gender || gender.length == 0) {
    error.gender = "Not selected";
    allValid = false;
  }

  // Birthday
  if (!birthday || birthday.length == 0) {
    error.birthday = "Not Selected";
    allValid = false;
  }

  // AddressLines
  if (addressLine1.length == 0) {
    error.addressLine1 = "Address cannot be empty";
    allValid = false;
  }
  if (addressLine2.length == 0) {
    error.addressLine2 = "Address cannot be empty";
    allValid = false;
  }

  return {
    valid: allValid,
    errorMessages: error,
  };
}

function contactInfoValidator({ name, number }) {
  const error = {
    name: "",
    number: "",
  };

  let allValid = true;
  // Name
  if (name.length == 0) {
    error.name = "Name cannot be empty";
    allValid = false;
  } else if (!name.match(/^[a-zA-Z\s]*$/)) {
    error.name = "Only letters allowed";
    allValid = false;
  }

  // Number
  if (number.length == 0) {
    error.number = "Phone Number cannot be empty";
    allValid = false;
  } else if (number.length != 8) {
    error.number = "Invalid Phone Number";
    allValid = false;
  } else if (!number.match(/^[0-9]*$/)) {
    error.number = "Only numbers allowed";
    allValid = false;
  }

  return {
    valid: allValid,
    errorMessages: error,
  };
}

export { basicInfoValidator, contactInfoValidator };
