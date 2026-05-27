import type{ PasswordOptions } from "../types/password";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+";
const SPACE = " ";

export function generatePassword(options: PasswordOptions): string{
  let characters = ''

  if (options.lowercase) characters += LOWERCASE
  if(options.uppercase) characters += UPPERCASE
  if(options.numbers) characters += NUMBERS
  if(options.symbols) characters += SYMBOLS
  if (options.spaces) characters += SPACE
  
  if (characters === '') return ''

  let password = ''

  while (password.length < options.length) {
    const char = characters[Math.floor(Math.random() * characters.length)]
    if (options.excludeDuplicates && password.includes(char)) continue
    password += char
  }

  return password
}