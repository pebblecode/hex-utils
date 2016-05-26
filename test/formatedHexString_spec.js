import { expect } from 'chai';
import { intToPrettyHex } from '../src';

describe('hex formatted as XX XX XX XX', () => {
  it('should format 203', () => {
    const formatted = intToPrettyHex(203);
    expect(formatted).to.equal('00 00 00 CB');
  });

  it('should format 2003', () => {
    const formatted = intToPrettyHex(2003);
    expect(formatted).to.equal('00 00 07 D3');
  });

  it('should format 20003', () => {
    const formatted = intToPrettyHex(20003);
    expect(formatted).to.equal('00 00 4E 23');
  });

  it('should format 200003', () => {
    const formatted = intToPrettyHex(200003);
    expect(formatted).to.equal('00 03 0D 43');
  });

  it('should format 2000003', () => {
    const formatted = intToPrettyHex(2000003);
    expect(formatted).to.equal('00 1E 84 83');
  });

  it('should format 20000003', () => {
    const formatted = intToPrettyHex(20000003);
    expect(formatted).to.equal('01 31 2D 03');
  });

  it('should format 200000003', () => {
    const formatted = intToPrettyHex(200000003);
    expect(formatted).to.equal('0B EB C2 03');
  });

  it('should format 2000000003', () => {
    const formatted = intToPrettyHex(2000000003);
    expect(formatted).to.equal('77 35 94 03');
  });

  it('should format 20000000003', () => {
    const formatted = intToPrettyHex(20000000003);
    expect(formatted).to.equal('04 A8 17 C8 03');
  });

  it('should format 2', () => {
    const formatted = intToPrettyHex(20);
    expect(formatted).to.equal('00 00 00 14');
  });
});

describe('invalid input should throw an error on non integer values', () => {
  it('undefined', () => {
    expect(intToPrettyHex).to.throw('non integer value provided to intToPrettyHex');
  });

  it('null', () => {
    expect(() => intToPrettyHex(null)).to.throw('non integer value provided to intToPrettyHex');
  });

  it('randomstring asda 123 sdf!@£ x', () => {
    expect(() => intToPrettyHex('randomstring asda 123 sdf!@£ x')).to.throw('non integer value provided to intToPrettyHex');
  });
});
