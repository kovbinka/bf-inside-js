import {fileToVariable} from './file-to-variable.js';

describe('fileToVariable: converts filename to camelCase variable', () => {
  describe('basic functionality', () => {
    it('removes the .js extension from a simple filename', () => {
      const result = fileToVariable('script.js');
      expect(result).toBe('script');
    });

    it('converts a hyphen to camelCase without an extension', () => {
      const result = fileToVariable('my-file');
      expect(result).toBe('myFile');
    });

    it('converts a hyphen and removes .js together', () => {
      const result = fileToVariable('my-file.js');
      expect(result).toBe('myFile');
    });

    it('leaves the string unchanged if there are no hyphens or .js', () => {
      const result = fileToVariable('hello');
      expect(result).toBe('hello');
    });
  });

  describe('edge cases', () => {
    it('returns an empty string for an empty input', () => {
      const result = fileToVariable('');
      expect(result).toBe('');
    });

    it('handles multiple hyphens in the string', () => {
      const result = fileToVariable('my-very-long-file.js');
      expect(result).toBe('myVeryLongFile');
    });

    it('ignores hyphens at the start or end', () => {
      const result = fileToVariable('-my-file-');
      expect(result).toBe('myFile');
    });

    it('handles a string with .js but no hyphens', () => {
      const result = fileToVariable('simplefile.js');
      expect(result).toBe('simplefile');
    });
  });

  describe('unexpected inputs', () => {
    it('handles a string with multiple .js occurrences', () => {
      const result = fileToVariable('file.js.js');
      expect(result).toBe('filejs');
    });

    it('preserves uppercase letters after a hyphen', () => {
      const result = fileToVariable('my-File.js');
      expect(result).toBe('myFile');
    });
  });
});