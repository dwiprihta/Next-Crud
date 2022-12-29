import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Layout from '../../../components/layouts/admin';
import axios from "axios";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Link from "next/link"

export async function getServerSideProps() {
  const req  = await axios.get(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/posts`)//http request
  const res  = await req.data.data.data
  return {
    props: {
        posts: res//assign response
    },
  }
}

export default function User({posts}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Layout pageTitle={"Halaman Utama e-Tokek"}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={10}>
        <h3>Data Pegawai</h3>
        </Grid>
        <Grid item xs={6} md={2}>
        <Link href="/admin/user/posts">
          <Button className="btn" variant="contained" color="success" startIcon={<ControlPointIcon />}>Tambah </Button>
        </Link>
        </Grid>
      </Grid> 
        
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow  className="tablerow">
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Judul</TableCell>
                <TableCell align="left">Konten</TableCell>
                <TableCell align="left">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {posts.map((post) => (
              <TableRow
                key={post.title}
              >
                <TableCell component="th" scope="row">
                  <img src={`${process.env.NEXT_PUBLIC_API_BACKEND}/storage/posts/${post.image}`} width="150"/>
                  </TableCell>
                <TableCell align="left">{post.title}</TableCell>
                <TableCell align="left">{post.content}</TableCell>
                <TableCell align="left"><Button variant="outlined" size="small" href="#outlined-buttons">
        Link
      </Button>
      </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={posts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Layout>
    </>
  );
}