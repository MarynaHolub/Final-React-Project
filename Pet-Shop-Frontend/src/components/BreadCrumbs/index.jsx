import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@mui/material';

import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';


function BreadCrumbs() {

  // Получаем текущий адрес
  const { pathname } = useLocation();

  // Разбиваем адрес на части
  //
  // Например:
  // /categories/5
  //
  // получится:
  // ['categories', '5']
  const paths = pathname
    .split('/')
    .filter(Boolean);

  console.log(paths);


  return (
    <MUIBreadcrumbs
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          width: '16px',
          height: '1px',
          backgroundColor: '#ddd',
          margin: 0,
        },
      }}
    >

      {/* Главная страница */}
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        sx={{
          display: 'block',
          border: '1px solid',
          borderColor: '#ddd',
          borderRadius: '6px',
          padding: '8px 16px',
        }}
      >
        Main Page
      </Link>


      {/* Создаём остальные элементы автоматически */}

      {paths.map((path, index) => {

        // Создаём URL для текущего элемента
        //
        // Например:
        //
        // index = 0
        // /categories
        //
        // index = 1
        // /categories/5

        const to =
          '/' + paths.slice(0, index + 1).join('/');


        // Проверяем, последний ли это элемент

        const isLast =
          index === paths.length - 1;


        // Если последний —
        // обычный текст, а не ссылка

        if (isLast) {
          return (
            <Typography
              key={to}
              color="text.primary"
              sx={{
                border: '1px solid',
                borderColor: '#ddd',
                borderRadius: '6px',
                padding: '8px 16px',
              }}
            >
              {path}
            </Typography>
          );
        }


        // Если НЕ последний —
        // создаём ссылку

        return (
          <Link
            key={to}
            component={RouterLink}
            to={to}
            underline="none"
            color="inherit"
            sx={{
              display: 'block',
              border: '1px solid',
              borderColor: '#ddd',
              borderRadius: '6px',
              padding: '8px 16px',
            }}
          >
            {path}
          </Link>
        );

      })}

    </MUIBreadcrumbs>
  );
}


export default BreadCrumbs;