// import { useTheme } from '@mui/system';
import PropTypes from 'prop-types';

function SkillBadge({ src, alt }) {
  // const { shape: { borderRadius } } = useTheme();

  return (
    <img
      style={{ borderRadius:"15px", height: '35px', margin: '4px' }}
      src={src}
      alt={alt}
    />
  );
}

// SkillBadge.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default SkillBadge;
