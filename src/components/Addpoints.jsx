import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from '@react-spring/web';
import TextField from '@mui/material/TextField';

const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "95%",
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 2,
    borderRadius: "15px"
};

export default function Addpoints() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className='w-full p-[10px] rounded-[10px] whitespace-nowrap bg-[#F5F7FA] text-[#005456]'>Добавить баллы</button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                // onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='flex justify-between items-center'>
                            <p style={{ fontFamily: "Montserrat-SemiBold", fontSize: "24px" }}>Добавление баллов</p>
                            <button onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className=' my-[20px]'>
                            <div className='my-[20px]'>
                                <TextField
                                    label="Начисление баллов*"
                                    defaultValue="40"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "5px", height: "40px" },
                                        "& .MuiInputLabel-root": { fontSize: "13px", zIndex: 0, },
                                        "& .MuiSelect-select": { fontSize: "13px", padding: "8px" },
                                    }}
                                >

                                </TextField>
                            </div>
                            <div className=' mt-4'>
                                <TextField
                                    label="Комментарий по начислению"
                                    variant="outlined"
                                    defaultValue="Выиграла в конкурсе Инстаграм"
                                    type="text"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": { borderRadius: "10px", height: "50px" },
                                        "& .MuiInputLabel-root": { fontSize: "15px" },
                                        "& input": { fontSize: "15px", padding: "8px" },
                                    }}
                                    InputProps={{
                                        sx: {
                                            height: 50,
                                            paddingBottom: 10,
                                            paddingTop: 3
                                        },
                                    }}
                                />
                            </div>
                            <div style={{ fontFamily: "Montserrat-Bold", fontSize: "11px" }} className='flex gap-2 mt-10 mb-2 '>
                                <button onClick={handleClose} className='w-full p-[10px] rounded-[10px] bg-[#F5F7FA] text-[#005456]'>Отмена</button>
                                <button className='w-full p-[10px] rounded-[10px] bg-[#005456] text-white'>Начислить</button>
                            </div>
                        </div>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
