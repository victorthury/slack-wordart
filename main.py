import sys
from subprocess import Popen, PIPE

special_char = {
    '@': 'at',
    '#': 'hash',
    '!': 'exclamation',
    '?': 'question',
    'á': 'a',
    'ã': 'a',
    'â': 'a',
    'à': 'a',
    'é': 'e',
    'ê': 'e',
    'í': 'i',
    'ó': 'o',
    'õ': 'o',
    'ô': 'o',
    'ú': 'o',
    'ç': 'c',
}

palavra = ' '.join(sys.argv[1:]).lower()
formato = ':alphabet-white-'
palavra_top = ''
for letra in palavra:
  if letra in special_char:
    letra = special_char[letra]
  letra_top = formato + letra + ':'
  if letra == ' ':
    letra_top = '    '
  palavra_top += letra_top

p = Popen(['xclip','-selection', 'c'], stdin=PIPE)
p.communicate(input=palavra_top.encode())