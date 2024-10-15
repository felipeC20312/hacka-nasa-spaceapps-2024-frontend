import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

const formSchema = z.object({
  country: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  props: z.string().min(2).max(50),
});

const CustomForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: '',
      state: '',
      props: '',
    },
  });

  const navigate = useNavigate();
  const navigateNextPage = () => {
    navigate('/home');
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    navigateNextPage();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='country'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className='text-[12px] text-white font-light'>
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Country'
                    className='bg-[#303030] border-[#757D86] ring-offset-[#DCF730] text-white  placeholder:text-[12px] placeholder:text-[#C8D0D8] placeholder:font-light'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='state'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className='text-[12px] text-white font-light'>
                  State
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='State'
                    className='bg-[#303030] border-[#757D86] ring-offset-[#DCF730] text-white  placeholder:text-[12px] placeholder:text-[#C8D0D8] placeholder:font-light'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name='props'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className='text-[12px] text-white font-light'>
                  Props
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Props'
                    className='bg-[#303030] border-[#757D86] ring-offset-[#DCF730] text-white  placeholder:text-[12px] placeholder:text-[#C8D0D8] placeholder:font-light'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <button
          type='submit'
          className='flex w-full h-[45px] mt-[50px] justify-center items-center rounded-[12px] bg-[#DCF730] text-[18px] text-[#282828] font-normal'>
          Submit
        </button>
      </form>
    </Form>
  );
};

export default CustomForm;
