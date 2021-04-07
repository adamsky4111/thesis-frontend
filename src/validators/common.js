export default {
  empty: [(v) => !!v || "To pole nie może być puste."],
  email: [
    (v) => !!v || "Proszę wpisać adres e-mail.",
    (v) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      "Proszę podać prawidłowy adres e-mail.",
  ],
  number: [(v) => /^[0-9]/.test(v) || "Proszę podać numer."],
  firstUpper: [(v) => !v || /[A-Z][a-zA-Z]+/.test(v) || "Niepoprawna wartość"],
  noSpace: [(v) => /^\S+$/.test(v) || "Niepoprawna wartość"],
};
