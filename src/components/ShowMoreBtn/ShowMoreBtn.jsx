import PropTypes from 'prop-types';

import css from './ShowMoreBtn.module.css';

export default function ShowMoreBtn({ onClick }) {
  return (
    <button type="button" className={css.btn} onClick={onClick}>
      Show More
    </button>
  );
}

// eslint-disable-next-line react/forbid-foreign-prop-types
ShowMoreBtn.propTypes = {
  onClick: PropTypes.func,
};
