import './ProgressBarWidget.css';

export function ProgressBarWidget(): JSX.Element {
    return (
        <div className='progress-bar'>
            <div className='progress-bar-fill'></div>
            <div className='progress-label'>50%</div>
        </div>
    );
}