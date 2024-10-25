import { FC, useEffect, useState } from 'react'
import Modal from 'react-modal'
import close from '../../../../assets/images/close.svg'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Button from 'components/particles/primary-button';
import { useprivacyPolicy } from 'containers/setting/CMS/privacy-policy/useHook';
import { useSelector } from 'react-redux';
import { dispatch } from 'store';
import { setModalClosed } from 'store/user-slice';

interface AddTermAndConditionsModelProps {
    modalIsOpen: boolean,
    id:number,
    data:any
}

interface ContentProps {
    name:string,
    description:any
}


const AddPrivacyPolicyPopup: FC<AddTermAndConditionsModelProps> = ({ modalIsOpen, id , data }) => {
    const {privacyPolicyModalIsOpen} = useSelector((state:any) => state.user)
    const [content, setContent] = useState<ContentProps>({
        name: '',
        description: '',
    });
    const {postPrivacyPolicy , putPrivacyPolicy} = useprivacyPolicy()

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
        dispatch(setModalClosed('Privacy Policy'))
    }

    const onSubmit = () => {        
        if(id === 0){
            postPrivacyPolicy(content)
        }
        else{
            putPrivacyPolicy(data?.id , content)
        }
    }

    useEffect(() => {
        if(data){
            setContent({
                ...content,
                name:data?.name || '',
                description:data?.description || ''
            })
        }
    },[data])
    
     return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className='close-button'>
                <img src={close} alt="img" onClick={closeModal} />
            </button>
            <div className='model-container'>

                <div className='popup-title' >
                    <h1>Privacy Policy</h1>
                </div>
                <div className='add-term-condition-container' >
                    <input type="text" placeholder='Heading 1 ' value={content?.name || ''} onChange={(e) => setContent({ ...content, name: e.target.value })}/>
                    <ReactQuill
                        theme="snow"
                        value={content?.description}
                        onChange={(value) => setContent({ ...content, description: value })}
                        className="text-editor"
                    />
                </div>
                <div className='add-button'>
                    <Button title={id === 0 ? "Add" : 'Edit'} width="51.2rem" backgroundcolor='var(--primary)' fill='true' onclick={onSubmit}/>
                </div>
            </div>
        </Modal>
    )
}

export default AddPrivacyPolicyPopup