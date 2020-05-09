import React from 'react';

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <button
      type="button"
      onClick={() => onUnlink(signInMethod.id)}
    >
      <span>Deactivate</span> {<signInMethod.Icon />}
    </button>
  ) : (
    <button
      type="button"
      onClick={() => onLink(signInMethod.provider)}
    >
      {<signInMethod.Icon />}
    </button>
  );

export default SocialLoginToggle;
