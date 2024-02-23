export const conditions = {
  // themes
  nurlTheme: '[data-theme=nurl] &',

  // modes
  lightMode: '[data-color-mode=light] &, &.light, .light &',
  darkMode: '[data-color-mode=dark] &, &.dark, .dark &',

  // states
  modalOpen: '&:is([data-modal-open=true])',
  screenReaderOnly: '&:is([data-screen-reader-only=true])',
  userInvalid: '&:is(:user-invalid, [aria-invalid=true])',
  startIcon: '&:is([data-start-icon=true])',
  online: '&:is([data-online=true])',

  // positions
  positionBottom: '&:is([data-position=bottom])',
  positionTop: '&:is([data-position=top])',
  positionLeft: '&:is([data-position=left])',
  positionRight: '&:is([data-position=right])',

  // roles
  admin: '&:is([data-role=admin])',
  player: '&:is([data-role=player])',
  user: '&:is([data-role=user])',
}
