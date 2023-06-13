function ModalAdd()
{
    return(
        <>
            <div className="Modal">
                <div className="Modal-dialog">
                    <div className="Modal-content">
                        <div className="Modal-header">
                            <h3 className="Modal-title">Create new task</h3>
                        </div>
                        <div className="Modal-body">
                            <input type="text"/>
                        </div>
                        <div className="Modal-footer">
                            <button className="btn-save">Save</button>
                            <button className="btn-close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalAdd