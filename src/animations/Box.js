import posed from 'react-pose';

export default posed.div({
    enter:{
      opacity: 1,
      delay: ({position})=> (position + 1) * 50
    },
    exit:{
      opacity: 0,
      height: 0
    }
  });

