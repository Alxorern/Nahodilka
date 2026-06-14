const LEET_MAP = {
  '0': 'о',
  '@': 'а',
  a: 'а',
  e: 'е',
  o: 'о',
  y: 'у',
  p: 'р',
  c: 'с',
  x: 'х',
  k: 'к',
  '3': 'з',
  '4': 'ч',
  '6': 'б',
  '7': 'т',
  '8': 'в',
};

const BLOCKED_SUBSTRINGS = [
  'хуй',
  'хуе',
  'хуя',
  'хуи',
  'пизд',
  'ебан',
  'ебат',
  'ебёт',
  'ебет',
  'сука',
  'суки',
  'бляд',
  'блят',
  'муда',
  'пидор',
  'пидр',
  'педик',
  'педер',
  'шлюх',
  'залуп',
  'говно',
  'дерьм',
  'fuck',
  'shit',
  'cunt',
  'dick',
  'cock',
  'slut',
  'bitch',
  'nazi',
  'nigg',
];

function normalizeForProfanityCheck(text) {
  let s = String(text).toLowerCase();
  for (const [k, v] of Object.entries(LEET_MAP)) {
    s = s.split(k).join(v);
  }
  s = s.replace(/\s+/g, '');
  s = s.replace(/[^а-яёa-z]/gi, '');
  return s;
}

function containsProfanity(text) {
  const n = normalizeForProfanityCheck(text);
  if (!n) return false;
  return BLOCKED_SUBSTRINGS.some((bad) => n.includes(bad));
}

function validateDisplayName(raw) {
  const trimmed = String(raw ?? '').trim();
  if (trimmed.length < 2) {
    return { ok: false, error: 'Имя слишком короткое' };
  }
  if (trimmed.length > 40) {
    return { ok: false, error: 'Имя не длиннее 40 букв' };
  }
  if (!/^[\p{L}\p{N}\s\-]+$/u.test(trimmed)) {
    return { ok: false, error: 'Только буквы, цифры, пробел и дефис' };
  }
  if (containsProfanity(trimmed)) {
    return { ok: false, error: 'Такое имя не подходит — придумай другое' };
  }
  return { ok: true, trimmed };
}

module.exports = { validateDisplayName };
