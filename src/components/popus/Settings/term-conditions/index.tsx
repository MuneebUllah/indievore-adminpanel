import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from 'assets/images/close.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'components/particles/primary-button';

import { useSelector } from 'react-redux';
import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';
import { useTermAndConditions } from 'containers/setting/CMS/term-and-conditions/useHook';

interface AddTermAndConditionsModelProps {
    data: any
    id: number
}

const AddTermAndConditionsPopup: FC<AddTermAndConditionsModelProps> = ({ data, id }) => {
    const { termAndConditionModalIsOpen } = useSelector((state: any) => state.user);
    const { postTermAndCondition, putTermAndCondition } = useTermAndConditions();    
    const [content, setContent] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        if (data) {        
            setContent({
                title: data?.title,
                description: data?.description,
            });
        }        
    }, [data]);


    const onSubmit = () => {
        if (id === 0) {
            postTermAndCondition(content);
        } else {
            putTermAndCondition(id, content);
        }
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            height: '65.6rem',
            width: '86rem',
            borderRadius: '3rem',
        },
    };

    function closeModal() {
        dispatch(setModalClosed('Term And Condition'));
    }
    
    return (
        <Modal
            isOpen={termAndConditionModalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Add/Edit Term & Condition"
        >
            <button className='close-button'>
                <img src={close} alt="img" onClick={closeModal} />
            </button>
            <div className='model-container'>
                <div className='popup-title'>
                    <h1>Terms & Conditions</h1>
                </div>

                <div className='add-term-condition-container'>
                    {/* Controlled input for title */}
                    <input
                        type="text"
                        placeholder='Heading 1'
                        value={content?.title} 
                        onChange={(e) => setContent({ ...content, title: e.target.value })} 
                    />

                    {/* Quill editor for description */}
                    <ReactQuill
                        theme="snow"
                        value={content?.description}
                        onChange={(value) => setContent({ ...content, description: value })} 
                        className="text-editor"
                    />
                </div>

                <div className='add-button'>
                    <Button
                        title={id !== 0 ? 'Edit' : 'Add'}
                        width="51.2rem"
                        backgroundcolor='var(--primary)'
                        fill='true'
                        onclick={onSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
}

export default AddTermAndConditionsPopup;
