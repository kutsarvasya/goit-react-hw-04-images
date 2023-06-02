import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://pixabay.com/api/?';
export async function getRequest(search, page) {
  const data = await axios({
    params: {
      q: search,
      page,
      key: '36255755-2fbf092869753c62ec4fb113a',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  if (!data.data.totalHits) {
    toast.error('YOU ENTERED AN INVALID REQUEST');
  }

  return data.data;
}
