import React from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Stack, styled, Button, Grid } from '@mui/material'
import { PymentTitle } from './CheckOut.style'
import { t } from 'i18next'
import { alpha, Typography } from '@mui/material'
import money from './assets/fi_2704332.png'
import wallet from './assets/walletpayment.png'
import CustomImageContainer from '../CustomImageContainer'
import PaymentMethodCard from './PaymentMethodCard'
import { useTheme } from '@emotion/react'
import { PrimaryButton } from '../products-page/FoodOrRestaurant'
import CloseIcon from '@mui/icons-material/Close'
const PayButton = styled(Button)(({ theme, value, paymentMethod }) => ({
    padding: '16px 16px',
    gap: '10px',
    alignItems: 'center',
    border: '1px solid',
    borderColor: alpha(theme.palette.neutral[400], 0.4),
    color:
        value === paymentMethod
            ? theme.palette.neutral[1000]
            : theme.palette.neutral[1000],
    background:
        value === paymentMethod && alpha(theme.palette.primary.main, 0.6),
    '&:hover': {
        color: theme.palette.neutral[1000],
        background: value === paymentMethod && theme.palette.primary.main,
    },
}))
const AllPaymentMethod = ({
    paymenMethod,
    usePartialPayment,
    global,
    setPaymenMethod,
    getPaymentMethod,
    selected,
    handleSubmit,
    subscriptionStates,
    handleClose,
}) => {
    const theme = useTheme()

    return (
        <Stack width="100%" padding="2rem" spacing={2.4}>
            <button className="closebtn" onClick={handleClose}>
                <CloseIcon sx={{ fontSize: '16px' }} />
            </button>
            <Stack>
                <PymentTitle>{t('Payment Method')}</PymentTitle>
                <Typography
                    fontSize="12px"
                    textTransform="capitalize"
                    color={theme.palette.neutral[1000]}
                >
                    {t('Select a Payment Method to Proceed')}
                </Typography>
            </Stack>
            <CustomStackFullWidth
                direction="row"
                gap="1rem"
                sx={{ flexWrap: 'wrap' }}
            >
                {global?.cash_on_delivery &&
                (global?.partial_payment_method === 'both' ||
                    global?.partial_payment_method === 'cod') ? (
                    <PayButton
                        value="cash_on_delivery"
                        paymentMethod={selected?.name}
                        onClick={() =>
                            getPaymentMethod({
                                name: 'cash_on_delivery',
                                image: money,
                            })
                        }
                    >
                        <CustomImageContainer
                            src={money.src}
                            width="20px"
                            height="20px"
                            alt="cod"
                        />
                        <Typography
                            fontSize="12px"
                            color={
                                selected?.name === 'cash_on_delivery'
                                    ? theme.palette.neutral[1000]
                                    : theme.palette.primary.main
                            }
                        >
                            {t('Pay after service')}
                        </Typography>
                    </PayButton>
                ) : null}
                {!usePartialPayment &&
                    global?.customer_wallet_status === 1 &&
                    subscriptionStates.order !== '1' && (
                        <PayButton
                            onClick={() =>
                                getPaymentMethod({
                                    name: 'wallet',
                                    image: wallet,
                                })
                            }
                            value="wallet"
                            paymentMethod={selected?.name}
                            disabled={usePartialPayment}
                        >
                            <CustomImageContainer
                                src={wallet.src}
                                width="20px"
                                height="20px"
                                alt="cod"
                            />
                            <Typography
                                fontSize="12px"
                                color={
                                    selected?.name === 'wallet'
                                        ? theme.palette.neutral[1000]
                                        : theme.palette.primary.main
                                }
                            >
                                {t('Pay via Wallet')}
                            </Typography>
                        </PayButton>
                    )}
            </CustomStackFullWidth>
            {global?.digital_payment && subscriptionStates.order !== '1' && (
                <CustomStackFullWidth spacing={2.4}>
                    <Typography
                        fontSize="14px"
                        fontWeight="600"
                        color={theme.palette.neutral[1000]}
                    >
                        {t('Pay Via Online')}
                        <Typography
                            component="span"
                            fontSize="10px"
                            ml="5px"
                            fontWeight="600"
                            color={theme.palette.neutral[1000]}
                        >
                            {t('(Faster & secure way to pay bill)')}
                        </Typography>
                    </Typography>
                    <Grid container rowGap="2.1rem">
                        {global?.digital_payment &&
                            (global?.partial_payment_method ===
                                'digital_payment' ||
                                global?.partial_payment_method === 'both') && (
                                <>
                                    {global?.active_payment_method_list?.map(
                                        (item, index) => {
                                            return (
                                                <Grid item md={6}>
                                                    <PaymentMethodCard
                                                        key={index}
                                                        paymentType={
                                                            item?.gateway_title
                                                        }
                                                        image={
                                                            item?.gateway_image
                                                        }
                                                        type={item?.gateway}
                                                        imageUrl={
                                                            global?.base_urls
                                                                ?.gateway_image_url
                                                        }
                                                        digitalPaymentMethodActive={
                                                            global?.digital_payment
                                                        }
                                                        getPaymentMethod={
                                                            getPaymentMethod
                                                        }
                                                        selected={selected}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    )}
                                </>
                            )}
                    </Grid>
                </CustomStackFullWidth>
            )}
            <Stack paddingTop="30px">
                <PrimaryButton variant="contained" onClick={handleSubmit}>
                    {t('Select')}
                </PrimaryButton>
            </Stack>
        </Stack>
    )
}

export default AllPaymentMethod
