'use client';

import { ResponseData } from '@/app/api/products/route';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import axios from 'axios';

type AxiosResponseData = {
  message: string,
  dataList: ResponseData[]
}

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const fetchProducts = async () => {
    const response = await axios.get("/api/products");
    const productData: AxiosResponseData = response.data;
    console.log(productData.dataList);
    return response;
  };
  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={fetchProducts}>Fetch and check console</Button>
    </Group>
  );
}
