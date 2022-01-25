import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SizeFilter({ FILTER_URL, changeParams }) {
  const navigate = useNavigate();

  const addFilter = size => {
    // let url = new URL(FILTER_URL);
    let params = new URLSearchParams(window.location.search);
    // // console.log(url);
    // console.log(params.getAll('categoryId'));
    // params.append('size', 220);
    params.append('size', `${size}`);
  };

  return (
    <FilterWrapper>
      <Title>신발 사이즈</Title>
      <Content>
        {size.map((e, i) => {
          return (
            <button key={i} onClick={() => addFilter()}>
              {e.size}
            </button>
          );
        })}
      </Content>
    </FilterWrapper>
  );
}
const FilterWrapper = styled.div`
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  padding: 10px 0;
`;

const Title = styled.div`
  font-weight: 600;
  margin: 10px 0;
`;

const Content = styled.div`
  button {
    padding: 5px 7px;
    margin: 5px 3px;
    border: 0.5px solid gainsboro;
    border-radius: 4px;
    font-size: 12px;
    background-color: #fff;
    cursor: pointer;
  }
`;

const size = [
  {
    size: 220,
    url: '&size=220',
  },
  {
    size: 225,
    url: '&size=225',
  },
  {
    size: 230,
    url: '&size=230',
  },
  {
    size: 235,
    url: '&size=235',
  },
  {
    size: 240,
    url: '&size=240',
  },
  {
    size: 245,
    url: '&size=245',
  },
  {
    size: 250,
    url: '&size=250',
  },
  {
    size: 255,
    url: '&size=255',
  },
  {
    size: 260,
    url: '&size=260',
  },
  {
    size: 265,
    url: '&size=265',
  },
  {
    size: 270,
    url: '&size=270',
  },
  {
    size: 275,
    url: '&size=275',
  },
  {
    size: 280,
    url: '&size=280',
  },
  {
    size: 285,
    url: '&size=285',
  },
  {
    size: 290,
    url: '&size=290',
  },
  {
    size: 295,
    url: '&size=295',
  },
  {
    size: 300,
    url: '&size=300',
  },
];
export default SizeFilter;
