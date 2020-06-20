import { useHistory } from 'react-router-dom';

export function useNavigator() {
  const history = useHistory();

  function navigateTo(path: string) {
    history.push(path);
  }

  return {
    navigateTo
  };
}