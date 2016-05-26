function leftPad(value, maxLength = 6) {
  return '0'.repeat(Math.max(0, maxLength - value.length)) + value;
}

function addSpaces(str, spaceInterval) {
  let withSpaces = '';
  for (let i = 0; i < str.length; i++) {
    if (i % spaceInterval === 0 && i !== 0) {
      withSpaces += ' ' + str.charAt(i);
    } else {
      withSpaces += str.charAt(i);
    }
  }

  const spacesStripped = withSpaces.replace(/\s/g, '');
  if (spacesStripped.length % spaceInterval === 1) {
    return addSpaces('0' + spacesStripped, spaceInterval);
  }

  return withSpaces;
}

function leftPadWithSpace(hexValue, charlength, spaceInterval = 2) {
  const padded = leftPad(hexValue, charlength);
  return addSpaces(padded, spaceInterval);
}

export function intToPrettyHex(int, charlength = 8) {
  if (int === null || isNaN(int)) {
    throw new Error('non integer value provided to intToPrettyHex');
  }

  const hexValue = int.toString(16);

  return leftPadWithSpace(hexValue, charlength).toUpperCase();
}
