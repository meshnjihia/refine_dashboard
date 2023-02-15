import {
  Typography,
  Box,
  Stack,
  FormControl,
  FormHelperText,
  TextareaAutosize,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@pankod/refine-mui'
import { FormProps } from 'interfaces/common'
import CustomButton from './CustomButton'

// import NumberFormat from 'react-number-format'

const Form = ({
  type,
  register,
  onFinish,
  formLoading,
  handleSubmit,
  handleImageChange,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={'#11142d'}>
        {type} a property
      </Typography>
      <Box mt={2.5} borderRadius={'15px'} padding={'20px'} bgcolor={'#fcfcfc'}>
        <form
          style={{
            marginTop: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter property name.
            </FormHelperText>
            <TextField
              variant="outlined"
              placeholder="Title"
              color="info"
              id="outlined-basic"
              required
              fullWidth
              {...register('title', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter property description.
            </FormHelperText>
            <TextareaAutosize
              style={{
                width: '100%',
                background: 'transparent',
                fontSize: '16px',
                borderColor: 'rgba(0,0,0,0.23)',
                color: '#919191',
                borderRadius: 6,
                padding: 10,
              }}
              color="info"
              id="outlined-basic"
              minRows={5}
              placeholder="Write description here"
              required
              {...register('description', { required: true })}
            />
          </FormControl>
          <Stack direction={'row'} gap={4}>
            <FormControl
              sx={{
                flex: 1,
              }}
            >
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d',
                }}
              >
                Select property type.
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue={'apartment'}
                {...register('propertyType', { required: true })}
              >
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condo</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: '#11142d',
                }}
              >
                Enter property price.
              </FormHelperText>
              <TextField
                variant="outlined"
                color="info"
                id="outlined-basic"
                type="number"
                required
                fullWidth
                {...register('price', { required: true })}
              />
              {/* <NumberFormat
              customInput={TextField}
              variant="outlined"
              color="info"
              id="outlined-basic"
              thousandSeparator={true}
              prefix={'$'}
              required
              fullWidth
              {...register('price', { required: true })} 
            />*/}
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: '10px 0',
                fontSize: 16,
                color: '#11142d',
              }}
            >
              Enter property location.
            </FormHelperText>
            <TextField
              variant="outlined"
              color="info"
              id="outlined-basic"
              required
              fullWidth
              {...register('location', { required: true })}
            />
            
          </FormControl>
          <Stack direction={'column'} gap={1} justifyContent={'center'} mb={2}>
            <Stack direction={'row'} gap={2}>
              <Typography
                fontSize={16}
                fontWeight={500}
                color={'#11142d'}
                my={'10px'}
              >
                Property Photo
              </Typography>
              <Button
                component="label"
                sx={{
                  width: 'fit-content',
                  color: '#2ed480',
                  textTransform: 'capitalize',
                  fontSize: 16,
                  backgroundColor: '#254782',
                }}
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0])
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color={'#808191'}
              sx={{ wordBreak: 'break-all' }}
            >
              {propertyImage?.name}
            </Typography>
          </Stack>
          <CustomButton
            type="submit"
            title={formLoading ? 'Submitting...' : 'Submit'}
            backgroundColor="#475be8"
            color="#fcfcfc"
          />
        </form>
      </Box>
    </Box>
  )
}

export default Form
