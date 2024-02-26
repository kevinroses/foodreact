import React, { useEffect, useState } from 'react'
import {
    alpha,
    Box,
    Button,
    Grid,
    IconButton,
    Stack,
    styled,
    Typography,
} from '@mui/material'
<<<<<<< HEAD
import delivery from '../../../public/static/bannerslider/delivery.png'
import Drawer from '@mui/material/Drawer'
=======
import cart from '../../../public/static/bannerslider/cart.png'
import delivery from '../../../public/static/bannerslider/delivery.png'
import Drawer from '@mui/material/Drawer'
import {
    OrderFoodAmount,
    OrderFoodName,
    OrderFoodSubtitle,
    OrderSummaryGrid,
} from '../checkout-page/CheckOut.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { useRouter } from 'next/router'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux'
import {
<<<<<<< HEAD
    calculateItemBasePrice,
    cartItemsTotalAmount,
    cartTotalAmount,
    getAmount, getConvertDiscount,
    getSelectedAddOn,
    getVariation,
    handleBadge, handleIncrementedTotal, handleProductValueWithOutDiscount
} from "@/utils/customFunctions";
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import  {
=======
    cartItemsTotalAmount,
    cartTotalAmount,
    getAmount,
    getSelectedAddOn,
    getVariation,
    handleBadge,
} from '../../utils/customFunctions'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    decrementProductQty,
    incrementProductQty,
    removeProduct,
    setCartItemByDispatch,
    setClearCart,
<<<<<<< HEAD
    cart
} from "@/redux/slices/cart"
import AuthModal from '../auth'
import { useQuery } from 'react-query'
import { RestaurantsApi } from "@/hooks/react-query/config/restaurantApi"
import {
    CustomColouredTypography,
    CustomTypographyBold,
} from "@/styled-components/CustomStyles.style"
import { useTranslation } from 'react-i18next'
import { ImageSource } from '../../utils/ImageSource'
import { setCouponInfo } from "@/redux/slices/global"
=======
} from '../../redux/slices/cart'
import AuthModal from '../auth'
import { useQuery } from 'react-query'
import { RestaurantsApi } from '../../hooks/react-query/config/restaurantApi'
import {
    CustomColouredTypography,
    CustomTypographyBold,
} from '../../styled-components/CustomStyles.style'
import { useTranslation } from 'react-i18next'
import { ImageSource } from '../../utils/ImageSource'
import { setCouponInfo } from '../../redux/slices/global'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import SimpleBar from 'simplebar-react'
import CustomModal from '../custom-modal/CustomModal'
import ProductUpdateModal from '../food-card/ProductUpdateModal'
import CustomImageContainer from '../CustomImageContainer'
import { useTheme } from '@mui/material/styles'
import { PrimaryButton } from '../products-page/FoodOrRestaurant'
import emptycart from '../../../public/static/emptycart.png'
import { RTL } from '../RTL/RTL'
import _ from 'lodash'
import VisibleVariations from './VisibleVariations'
import Cart from './Cart'
import { handleTotalAmountWithAddonsFF } from '../../utils/customFunctions'
import toast from 'react-hot-toast'
import { t } from 'i18next'
<<<<<<< HEAD
import GuestCheckoutModal from "./GuestCheckoutModal";
import { onErrorResponse } from "../ErrorResponse";
import { getGuestId } from "../checkout-page/functions/getGuestUserId";
import useDeleteAllCartItem from "../../hooks/react-query/add-cart/useDeleteAllCartItem";
import { getItemDataForAddToCart } from "./helperFunction";
import { getSelectedAddons, getSelectedVariations } from "../navbar/second-navbar/SecondNavbar";
import CircularLoader from "../loader/CircularLoader";
import CartContent from "./CartContent";
import useGetAllCartList from "@/hooks/react-query/add-cart/useGetAllCartList";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const FloatingCart = (props) => {
    const { sideDrawerOpen, setSideDrawerOpen } = props
    const theme = useTheme()
<<<<<<< HEAD
    const { t } = useTranslation()
    const [openGuestModal, setOpenGuestModal] = useState(false);
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const router = useRouter()
    const dispatch = useDispatch()
    const [open, setDrawerOpen] = useState(false)
    const { cartList } = useSelector((state) => state.cart)
    const [modalFor, setModalFor] = useState('sign-in')
<<<<<<< HEAD
    const [openModal, setOpenModal] = React.useState(false)

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { global } = useSelector((state) => state.globalSettings)
    const { token } = useSelector((state) => state.userToken)
    const { isFilterDrawerOpen } = useSelector(
        (state) => state.searchFilterStore
    )
<<<<<<< HEAD
    const { mutate } = useDeleteAllCartItem();

=======

    const { t } = useTranslation()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    let languageDirection
    if (typeof window !== 'undefined') {
        languageDirection = localStorage.getItem('direction')
    }
    const [authModalOpen, setOpen] = useState(false)
    const handleOpenAuthModal = () => setOpen(true)
    const handleCloseAuthModal = () => setOpen(false)
    const productBaseUrl = global?.base_urls?.product_image_url
    let currencySymbol
    let currencySymbolDirection
    let digitAfterDecimalPoint
    if (cartList?.length > 0) {
    }

    if (global) {
        currencySymbol = global.currency_symbol
        currencySymbolDirection = global.currency_symbol_direction
        digitAfterDecimalPoint = global.digit_after_decimal_point
    }
    // const handleBadge = () => {}
    const {
        isLoading,
        data: restaurantData,
        isError,
        error,
        refetch,
    } = useQuery([`restaurant-details`], () =>
        RestaurantsApi.restaurantDetails(cartList[0]?.restaurant_id)
    )
    const DrawerHeader = styled('div')(({ theme }) => ({
        marginTop: '60px',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        [theme.breakpoints.down('md')]: {
            marginTop: '10px',
        },
    }))
    const handleCheckout = () => {
<<<<<<< HEAD
        const closeDrawers = () => {
            setDrawerOpen(false);
            setSideDrawerOpen(false);
        };
        if (token) {
            router.push('/checkout?page=cart');
            closeDrawers();
        } else {
            const shouldOpenGuestModal = global?.guest_checkout_status === 1;
            if (shouldOpenGuestModal) {
                setOpenGuestModal(true);
            } else {
                handleOpenAuthModal();
            }

            closeDrawers();
        }
    };
=======
        if (token) {
            router.push('/checkout?page=cart')
            setDrawerOpen(false)
            setSideDrawerOpen(false)
        } else {
            handleOpenAuthModal()
            setDrawerOpen(false)
            setSideDrawerOpen(false)
        }
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    useEffect(() => {
        refetch().then()
    }, [])
    // const variationPrice = cartList.map((item) => {
    //     if (item.variation && item.variation?.length > 0) {
    //         return item.variation.map((varItem) => varItem.price)
    //     } else return cartList.price
    // })
    const handleClearAll = () => {
<<<<<<< HEAD
        mutate(getGuestId(), {
            //onSuccess: handleSuccess,
            onError: onErrorResponse,
        });
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        dispatch(setClearCart())
        dispatch(setCouponInfo(null))
        setOpenModal(false)
    }
    // cart update modal
<<<<<<< HEAD

=======
    const [openModal, setOpenModal] = React.useState(false)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleProductUpdateModal = (item) => {
        dispatch(setCartItemByDispatch(item))
        setOpenModal(true)
        setSideDrawerOpen(false)
    }
<<<<<<< HEAD
    const cartListSuccessHandler=(res)=>{
        if(res){
            const setItemIntoCart = () => {
                return res?.map((item) => ({
                    ...item?.item,
                    cartItemId: item?.id,
                    totalPrice:
                        getConvertDiscount(
                            item?.item?.discount,
                            item?.item?.discount_type,
                            handleProductValueWithOutDiscount(item?.item),
                            item?.item?.restaurant_discount
                        )
                        *
                        item?.quantity
                    ,
                    selectedAddons:getSelectedAddons(item?.item?.addons) ,
                    quantity: item?.quantity,
                    variations: item?.item?.variations,
                    itemBasePrice: getConvertDiscount(
                        item?.item?.discount,
                        item?.item?.discount_type,
                        calculateItemBasePrice(item?.item, item?.item?.variations),
                        item?.item?.restaurant_discount
                    ),
                    selectedOptions:getSelectedVariations(item?.item?.variations)
                }));
            };
            dispatch(cart(setItemIntoCart()));
        }
    }

    const {
        data:cartData,
        refetch: cartListRefetch,
    } = useGetAllCartList(getGuestId(),cartListSuccessHandler);
=======
    const handleIncrement = (item) => {
        if (item?.maximum_cart_quantity) {
            if (item?.maximum_cart_quantity <= item?.quantity) {
                toast.error(t('Out Of Limits'))
            } else {
                dispatch(incrementProductQty(item))
            }
        } else {
            dispatch(incrementProductQty(item))
        }
    }

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <>
            {authModalOpen && (
                <AuthModal
                    open={authModalOpen}
                    handleClose={handleCloseAuthModal}
                    modalFor={modalFor}
                    setModalFor={setModalFor}
<<<<<<< HEAD
                    cartListRefetch={cartListRefetch}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                />
            )}
            {!sideDrawerOpen && (
                <Box
                    className="cart__burger"
                    sx={{
                        position: 'fixed',
                        width: '85px',
                        height: '90px',
                        left: languageDirection === 'rtl' ? 10 : 'auto',
                        right: languageDirection === 'rtl' ? 'auto' : 10,
                        top: '40%',
                        /* margin-left: -300px; */
                        zIndex: 1000000,
                        flexGrow: 1,
                        cursor: 'pointer',
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: isFilterDrawerOpen
                                ? 'none'
                                : cartList?.length === 0
                                ? 'none'
                                : 'inherit',
                        },
                    }}
                    onClick={() => setSideDrawerOpen(true)}
                >
                    <div>
                        <Cart />
                        {/*<CustomImageContainer src={cart.src} alt={'cart'} />*/}
                        {/*<img src={cart.src} alt="" />*/}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '35%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            {cartList?.length}
                            <Typography
                                sx={{
                                    lineHeight: 0.5,
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                }}
                            >
                                {t('Items')}
                            </Typography>
                        </Box>
                    </div>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '75px',
                            bottom: '6px',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: (theme) => theme.palette.neutral[100],
                            width: '100px',
                        }}
                    >
                        <Stack flexWrap="wrap">
                            <Typography
                                sx={{
                                    lineHeight: 0.5,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
<<<<<<< HEAD
                                    fontSize: '13px',
=======
                                    fontSize: '14px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                }}
                                color={theme.palette.whiteContainer.main}
                            >
                                {getAmount(
                                    cartItemsTotalAmount(cartList),
                                    currencySymbolDirection,
                                    currencySymbol,
                                    digitAfterDecimalPoint
                                )}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            )}
            <RTL direction={languageDirection}>
                <Drawer
                    anchor="right"
                    open={sideDrawerOpen}
                    onClose={() => setSideDrawerOpen(false)}
                    variant="temporary"
                    sx={{ zIndex: '1400' }}
                >
                    {cartList?.length === 0 ? (
                        <Stack
                            sx={{
                                width: '330px',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '20px',
                            }}
                            container
                        >
                            <CustomImageContainer
                                src={emptycart.src}
                                height="250px"
                            />
                            <CustomTypographyBold align="center">
                                {t('Cart is Empty')}
                            </CustomTypographyBold>
                        </Stack>
                    ) : (
                        <>
                            <Stack
                                width="330px"
                                height="100%"
                                p="1rem"
                                justifyContent="start"
                                gap="2%"
                                marginTop={{
                                    xs: '20px',
                                    sm: '25px',
                                    md: '60px',
                                }}
                            >
<<<<<<< HEAD
                                <Stack gap="1rem">
                                    <Stack>
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '18px',
                                            }}
                                        >
=======
                                <Stack>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            fontSize: '18px',
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.primary.main,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {cartList?.length} {t('Items')}
                                        </Typography>{' '}
                                        {t('in your cart')}
                                    </Typography>
                                    {restaurantData?.data?.delivery_time && (
                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '14px',
                                            }}
                                        >
                                            <img
                                                style={{ marginBottom: '4px' }}
                                                src={delivery.src}
                                                loading="lazy"
                                            />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: (theme) =>
<<<<<<< HEAD
                                                        theme.palette.primary.main,
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {cartList?.length} {t('Items')}
                                            </Typography>{' '}
                                            {t('in your cart')}
                                        </Typography>
                                        {restaurantData?.data?.delivery_time && (
                                            <Typography
                                                sx={{
                                                    textAlign: 'center',
                                                    fontSize: '14px',
                                                }}
                                            >
                                                <img
                                                    style={{ marginBottom: '4px' }}
                                                    src={delivery.src}
                                                    loading="lazy"
                                                />
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: (theme) =>
                                                            theme.palette
                                                                .neutral[400],
                                                        marginLeft: '10px',
                                                        fontWeight: 600,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        restaurantData?.data
                                                            ?.delivery_time
                                                    }
                                                </Typography>
                                            </Typography>
                                        )}
                                    </Stack>
                                    <SimpleBar
                                        style={{
                                            height: '55vh',
                                            width: '100%',
                                        }}
                                    >
                                        <Grid container spacing={{ xs: 1 }}>
                                            {cartList?.map((item) => (
                                                <React.Fragment key={item.id}>
                                                    <CartContent item={item} handleProductUpdateModal={handleProductUpdateModal}
                                                                 productBaseUrl={productBaseUrl}
                                                                 t={t}

                                                    />
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                    </SimpleBar>
                                </Stack>
                                <Stack alignItems="center" spacing={2} position="sticky" marginTop="auto">
                                    <Stack
                                        borderRadius="5px"
                                        sx={{

=======
                                                        theme.palette
                                                            .neutral[400],
                                                    marginLeft: '10px',
                                                    fontWeight: 600,
                                                    textAlign: 'center',
                                                }}
                                            >
                                                {
                                                    restaurantData?.data
                                                        ?.delivery_time
                                                }
                                            </Typography>
                                        </Typography>
                                    )}
                                </Stack>
                                <SimpleBar
                                    style={{
                                        height: '55vh',
                                        width: '100%',
                                    }}
                                >
                                    <Grid container spacing={{ xs: 1 }}>
                                        {cartList?.map((item) => (
                                            <React.Fragment key={item.id}>
                                                <Grid
                                                    item
                                                    md={4}
                                                    xs={4}
                                                    onClick={() =>
                                                        handleProductUpdateModal(
                                                            item
                                                        )
                                                    }
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    <CustomImageContainer
                                                        height="90px"
                                                        width="90px"
                                                        src={ImageSource(
                                                            productBaseUrl,
                                                            item.image
                                                        )}
                                                        borderRadius=".7rem"
                                                        objectFit="cover"
                                                    />
                                                    {/*<img*/}
                                                    {/*    height="90px"*/}
                                                    {/*    width="90px"*/}
                                                    {/*    src={ImageSource(*/}
                                                    {/*        productBaseUrl,*/}
                                                    {/*        item.image*/}
                                                    {/*    )}*/}
                                                    {/*    loading="lazy"*/}
                                                    {/*/>*/}
                                                </Grid>
                                                <Grid item md={8} xs={8}>
                                                    <Grid
                                                        container
                                                        md={12}
                                                        xs={12}
                                                        spacing={{ xs: 1 }}
                                                    >
                                                        <Grid
                                                            item
                                                            md={12}
                                                            xs={12}
                                                        >
                                                            <OrderFoodName
                                                                sx={{
                                                                    cursor: 'pointer',
                                                                }}
                                                                onClick={() =>
                                                                    handleProductUpdateModal(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                {item.name}
                                                            </OrderFoodName>
                                                            {item?.variations
                                                                ?.length >
                                                                0 && (
                                                                <VisibleVariations
                                                                    variations={
                                                                        item?.variations
                                                                    }
                                                                    t={t}
                                                                />
                                                            )}
                                                            {item
                                                                ?.selectedAddons
                                                                ?.length >
                                                                0 && (
                                                                <Stack
                                                                    direction="row"
                                                                    alignItems="center"
                                                                    spacing={
                                                                        0.5
                                                                    }
                                                                >
                                                                    <OrderFoodSubtitle>
                                                                        {t(
                                                                            'Addon'
                                                                        )}
                                                                    </OrderFoodSubtitle>
                                                                    <OrderFoodSubtitle>
                                                                        :
                                                                    </OrderFoodSubtitle>
                                                                    <OrderFoodSubtitle>
                                                                        {getSelectedAddOn(
                                                                            item?.selectedAddons
                                                                        )}
                                                                    </OrderFoodSubtitle>
                                                                </Stack>
                                                            )}
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            md={6}
                                                            xs={6}
                                                        >
                                                            <OrderFoodAmount>
                                                                {getAmount(
                                                                    handleTotalAmountWithAddonsFF(
                                                                        item.totalPrice,
                                                                        item?.selectedAddons
                                                                    ),
                                                                    currencySymbolDirection,
                                                                    currencySymbol,
                                                                    digitAfterDecimalPoint
                                                                )}
                                                            </OrderFoodAmount>
                                                        </Grid>
                                                        <Grid
                                                            md={6}
                                                            xs={6}
                                                            pt="6px"
                                                        >
                                                            <Stack
                                                                direction="row"
                                                                alignItems="center"
                                                                spacing={2}
                                                            >
                                                                {item?.quantity ===
                                                                1 ? (
                                                                    <IconButton
                                                                        aria-label="delete"
                                                                        size="small"
                                                                        color="error"
                                                                    >
                                                                        <DeleteIcon
                                                                            onClick={() =>
                                                                                dispatch(
                                                                                    removeProduct(
                                                                                        {
                                                                                            ...item,
                                                                                        }
                                                                                    )
                                                                                )
                                                                            }
                                                                            fontSize="inherit"
                                                                        />
                                                                    </IconButton>
                                                                ) : (
                                                                    <IconButton
                                                                        aria-label="delete"
                                                                        size="small"
                                                                        sx={{
                                                                            width: '24px',
                                                                            height: '24px',
                                                                            background:
                                                                                (
                                                                                    theme
                                                                                ) =>
                                                                                    theme
                                                                                        .palette
                                                                                        .neutral[200],
                                                                            borderRadius:
                                                                                '11px',
                                                                        }}
                                                                    >
                                                                        <RemoveIcon
                                                                            size="small"
                                                                            sx={{
                                                                                color: (
                                                                                    theme
                                                                                ) =>
                                                                                    theme
                                                                                        .palette
                                                                                        .neutral[1000],
                                                                                padding:
                                                                                    '3px',
                                                                            }}
                                                                            onClick={() =>
                                                                                dispatch(
                                                                                    decrementProductQty(
                                                                                        {
                                                                                            ...item,
                                                                                        }
                                                                                    )
                                                                                )
                                                                            }
                                                                            //onClick={decrementPrice}
                                                                        />
                                                                    </IconButton>
                                                                )}
                                                                <Typography>
                                                                    {
                                                                        item?.quantity
                                                                    }
                                                                </Typography>
                                                                <IconButton
                                                                    aria-label="delete"
                                                                    size="small"
                                                                    sx={{
                                                                        width: '24px',
                                                                        height: '24px',
                                                                        background:
                                                                            (
                                                                                theme
                                                                            ) =>
                                                                                theme
                                                                                    .palette
                                                                                    .neutral[200],
                                                                        borderRadius:
                                                                            '11px',
                                                                    }}
                                                                >
                                                                    <AddIcon
                                                                        sx={{
                                                                            color: (
                                                                                theme
                                                                            ) =>
                                                                                theme
                                                                                    .palette
                                                                                    .neutral[1000],
                                                                            padding:
                                                                                '3px',
                                                                        }}
                                                                        size="small"
                                                                        onClick={() =>
                                                                            handleIncrement(
                                                                                item
                                                                            )
                                                                        }
                                                                    />
                                                                </IconButton>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                </SimpleBar>
                                <Stack alignItems="center" spacing={2}>
                                    <Stack
                                        borderRadius="5px"
                                        sx={{
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                            width: '100%',
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                        }}
                                        backgroundColor={alpha(
                                            theme.palette.primary.main,
                                            0.3
                                        )}
                                        justifyContent="center"
                                        alignItems="center"
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    >
                                        <CustomColouredTypography
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.neutral[1000],
                                            }}
                                        >
                                            {t('Total Price')}{' '}
                                            {getAmount(
                                                cartItemsTotalAmount(cartList),
                                                currencySymbolDirection,
                                                currencySymbol,
                                                digitAfterDecimalPoint
                                            )}
                                        </CustomColouredTypography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        width="100%"
                                        spacing={1}
                                    >
                                        <PrimaryButton
                                            backgroundColor={
                                                theme.palette.neutral[200]
                                            }
                                            onClick={handleClearAll}
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            borderRadius="7px"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.neutral[1000],
                                                fontWeight: 400,
                                            }}
                                        >
                                            {t('Clear All')}
                                        </PrimaryButton>
                                        <PrimaryButton
                                            onClick={handleCheckout}
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            borderRadius="7px"
                                        >
                                            {t('Checkout')}
                                        </PrimaryButton>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </>
                    )}
                </Drawer>
            </RTL>
<<<<<<< HEAD
            {openGuestModal && <GuestCheckoutModal setModalFor={setModalFor}  handleOpenAuthModal={handleOpenAuthModal} open={openGuestModal} setOpen={setOpenGuestModal} setSideDrawerOpen={setSideDrawerOpen}/>}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            {openModal && (
                <ProductUpdateModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    currencySymbol={currencySymbol}
                    currencySymbolDirection={currencySymbolDirection}
                    digitAfterDecimalPoint={digitAfterDecimalPoint}
                    handleBadge={handleBadge}
                />
            )}
        </>
    )
    //}
}

export default FloatingCart
